using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class PigComponent : MonoBehaviour
{
    private List<Transform> allWaypoints = new List<Transform>();
    public string color;
    public int Bullet;
    public int laneIndex;
    
    public Transform rayCastPoint;
    public Rigidbody rb;
    
    private float jumpToQueueSpeed;

    public bool isOnTop = false;
    public bool isOnBelt = false;
    
    public PigState currentState = PigState.InLane;
    private int queueIndex = -1;

    private Vector3 _rayCastDirection = Vector3.forward;
    public LayerMask blockLayer;
    
    private WavyLineRenderer _wavyLine;
    private GameObject _lastCheckedBlock;
    
    public TextMeshProUGUI bulletText;
    public GameObject pigModel;
    private float speedOnStraigt = 0f;
    private float speedOnCurve = 0f;
    
    private void OnDisable()
    {
    }
    
    public int GetQueueIndex() => queueIndex;
    public void SetQueueIndex(int index) => queueIndex = index;
    
    public void ChangeState(PigState newState)
    {
        currentState = newState;
    }
    
    public void Initialize(string color, int bulletCount, int laneIndex, [Bridge.Ref] Color lineColor, float speedOnStraight, float speedOnCurve, float jumpSpeed)
    {
        this.color = color;
        this.Bullet = bulletCount;
        this.laneIndex = laneIndex;
        
        this.speedOnCurve = speedOnCurve;
        this.speedOnStraigt = speedOnStraight;
        this.jumpToQueueSpeed = jumpSpeed;
        
        if (_wavyLine == null)
        {
            _wavyLine = GetComponent<WavyLineRenderer>();
            if (_wavyLine == null)
            {
                _wavyLine = gameObject.AddComponent<WavyLineRenderer>();
            }
        }
        
        _wavyLine.SetColor(lineColor);
        _wavyLine.SetBulletChangedCallback(OnBulletChanged);
        bulletText.text = bulletCount.ToString();
        var meshRenderer = pigModel.GetComponentInChildren<SkinnedMeshRenderer>();
        if (meshRenderer != null)
        {
            meshRenderer.material.color = GameUtility.GetColorByName(color);
        }
    }
    
    private void OnBulletChanged()
    {
        if (Bullet <= 0 && isOnBelt)
        {
            isOnBelt = false;
            if (_wavyLine != null)
            {
                _wavyLine.ClearAllTargets();
                _wavyLine.HideLineImmediately();
            }
            StartCoroutine(DestroyAnimation());
        }
    }
    
    private IEnumerator DestroyAnimation()
    {
        ChangeState(PigState.Destroying);
        isOnBelt = false;
        StopAllCoroutines();
        StartCoroutine(DestroyAnimationInternal());
        SoundManager.Instance.StopSound(SoundManager.Instance.yarn);
        
        yield break;
    }
    
    private IEnumerator DestroyAnimationInternal()
    {
        Vector3 startScale = transform.localScale;
        Quaternion startRotation = rb.rotation;
        Vector3 currentPos = rb.position;
        float duration = 0.3f;
        float elapsed = 0f;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            
            rb.MovePosition(currentPos);
            transform.localScale = Vector3.Lerp(startScale, Vector3.zero, t);
            rb.MoveRotation(startRotation * Quaternion.Euler(0f, t * 360f, 0f));
            
            yield return new WaitForFixedUpdate();
        }
        
        EventManager.OnPigDestroyed?.Invoke();
        Destroy(gameObject);
    }

    public void JumpTo(List<Transform> path, Action onComplete)
    {
        if (currentState == PigState.InQueue)
        {
            ChangeState(PigState.JumpingFromQueue);
        }
        else
        {
            ChangeState(PigState.JumpingToConveyor);
        }
        
        allWaypoints = path;
        StartCoroutine(ConveyorJourney(onComplete));
    }

    private IEnumerator ConveyorJourney(Action onComplete)
    {
        Vector3 firstPoint = allWaypoints[0].position;
        yield return StartCoroutine(JumpCoroutine(firstPoint, 0.4f, 1.5f, onComplete));

        ChangeState(PigState.OnConveyor);
        StartCoroutine(MovePigThroughWaypoints(0, allWaypoints.Count - 1, allWaypoints));
        StartCoroutine(ShootingRoutine());
    }

    private IEnumerator JumpCoroutine(Vector3 target, float duration, float height, Action onComplete)
    {
        isOnTop = true;
        Vector3 startPos = rb.position;
        float elapsed = 0;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            Vector3 currentPos = Vector3.Lerp(startPos, target, t);

            currentPos.y += Mathf.Sin(t * Mathf.PI) * height;

            rb.MovePosition(currentPos);
            yield return new WaitForFixedUpdate();
        }

        rb.MovePosition(target);
        isOnTop = false;
        isOnBelt = true;
        
        onComplete?.Invoke();
    }
    
    public void MoveTo([Bridge.Ref] Vector3 newLocalPos)
    {
        StartCoroutine(MoveCoroutine(newLocalPos));
    }

    private IEnumerator MoveCoroutine([Bridge.Ref] Vector3 targetLocalPos)
    {
        Vector3 startLocalPos = transform.localPosition;
        float duration = 0.2f;
        float elapsed = 0f;
    
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            Vector3 newLocalPos = Vector3.Lerp(startLocalPos, targetLocalPos, t);
            Vector3 newWorldPos = transform.parent.TransformPoint(newLocalPos);
            rb.MovePosition(newWorldPos);
            yield return new WaitForFixedUpdate();
        }
    
        Vector3 finalWorldPos = transform.parent.TransformPoint(targetLocalPos);
        rb.MovePosition(finalWorldPos);
    }
    
    private IEnumerator ShootingRoutine()
    {
        while (isOnBelt)
        {
            if (_wavyLine != null)
            {
                _wavyLine.UpdateStartPoint(rayCastPoint.position);
            }
            
            CheckAndAddTargetBlocks();
            
            yield return new WaitForFixedUpdate();
        }
    }
    
    private void CheckAndAddTargetBlocks()
    {
        if (rayCastPoint == null || _wavyLine == null)
        {
            return;
        }
        

        float checkDistance = 10f;
        Vector3 currentPos = rayCastPoint.position;
        
        if (Physics.Raycast(currentPos, _rayCastDirection, out RaycastHit hit, checkDistance, blockLayer))
        {
            var blockComp = hit.collider.gameObject.GetComponent<Block>();
            GameObject hitObject = hit.collider.gameObject;
   
            if (hit.collider.CompareTag("Block") && blockComp != null && blockComp.color == color && !blockComp.isAlreadyDestroyed)
            {
                _lastCheckedBlock = hitObject;
                _wavyLine.AddTarget(hitObject);
                blockComp.isAlreadyDestroyed = true;
                if (_lastCheckedBlock != hitObject)
                {

                }
            }
            else
            {
                _lastCheckedBlock = null;
            }
        }
        else
        {
            _lastCheckedBlock = null;
        }
    }
    
    public IEnumerator SlideTo([Bridge.Ref] Vector3 target, float duration)
    {
        Vector3 start = rb.position;
        float elapsed = 0;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            Vector3 newPos = Vector3.Lerp(start, target, elapsed / duration);
            rb.MovePosition(newPos);
            
            yield return new WaitForFixedUpdate();
        }
        rb.MovePosition(target);
    }

    private IEnumerator MovePigThroughWaypoints(int startIndex, int targetIndex, List<Transform> path)
    {
        int i = startIndex;
        while (true)
        {
            var current = path[i];

            if (Mathf.Abs(Vector3.Dot(_rayCastDirection, current.forward)) < 0.01f)
            {
                _rayCastDirection =  current.transform.forward;
            }

            if (current.gameObject.CompareTag("ControlPos") && i + 2 <= targetIndex)
            {
                Vector3 start = path[i].position;
                Vector3 control = path[i + 1].position;
                Vector3 end = path[i + 2].position;
                Quaternion startRot = path[i].rotation;
                Quaternion endRot = path[i + 2].rotation;

                yield return StartCoroutine(SlideOnCurve(start, control, end, startRot, endRot, speedOnCurve));
                i += 2;

            }
            else
            {
                rb.MoveRotation(path[i].rotation);
                Vector3 end = path[i + 1].position;
                yield return StartCoroutine(SlideTo(end, speedOnStraigt));
                i++;
            }

            if (i >= path.Count - 1)
            {
                i = 0;
            }
        }
    }

    public IEnumerator SlideOnCurve([Bridge.Ref] Vector3 start, [Bridge.Ref] Vector3 control, [Bridge.Ref] Vector3 end, [Bridge.Ref] Quaternion startRotation, [Bridge.Ref] Quaternion endRotation, float duration)
    {
        float elapsed = 0;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            Vector3 position = Mathf.Pow(1 - t, 2) * start +
                               2 * (1 - t) * t * control +
                               Mathf.Pow(t, 2) * end;

            rb.MovePosition(position);
            rb.MoveRotation(Quaternion.Slerp(startRotation, endRotation, t));

            yield return new WaitForFixedUpdate();
        }
        rb.MovePosition(end);
        rb.MoveRotation(endRotation);
    }
    

    public void JumpToQueue([Bridge.Ref] Vector3 targetPosition, [Bridge.Ref] Quaternion targetRotation, int targetQueueIndex)
    {
        ChangeState(PigState.MovingToQueue);
        queueIndex = targetQueueIndex;
        
        StopAllCoroutines();
        if (_wavyLine != null)
        {
            _wavyLine.ClearAllTargets();
            _wavyLine.HideLineImmediately();
        }
        
        _lastCheckedBlock = null;
        isOnBelt = false;
        StartCoroutine(JumpToQueueCoroutine(targetPosition, targetRotation));
    }
    
    private IEnumerator JumpToQueueCoroutine(Vector3 targetPos, [Bridge.Ref] Quaternion targetRot)
    {
        Vector3 startPos = rb.position;
        Quaternion startRot = rb.rotation;
        
        float distance = Vector3.Distance(startPos, targetPos);
        float duration = distance / jumpToQueueSpeed;
        
        float height = 1.0f;
        float elapsed = 0;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            Vector3 currentPos = Vector3.Lerp(startPos, targetPos, t);
            currentPos.y += Mathf.Sin(t * Mathf.PI) * height;
            rb.MovePosition(currentPos);

            rb.MoveRotation(Quaternion.Lerp(startRot, targetRot, t));
            
            yield return new WaitForFixedUpdate();
        }

        rb.MovePosition(targetPos);
        rb.MoveRotation(targetRot);
        isOnTop = true;
        
        ChangeState(PigState.InQueue);
    }
    
    public void MoveInQueue([Bridge.Ref] Vector3 targetPos, [Bridge.Ref] Quaternion targetRot, int newQueueIndex)
    {
        if (currentState == PigState.MovingToQueue)
        {
            StopAllCoroutines();
            queueIndex = newQueueIndex;
            isOnBelt = false;
            ChangeState(PigState.MovingInQueue);
            StartCoroutine(MoveInQueueCoroutine(targetPos, targetRot));
        }
        else if (currentState == PigState.InQueue)
        {
            ChangeState(PigState.MovingInQueue);
            queueIndex = newQueueIndex;
            StartCoroutine(MoveInQueueCoroutine(targetPos, targetRot));
        }
        else if (currentState == PigState.MovingInQueue)
        {
            queueIndex = newQueueIndex;
            StopAllCoroutines();
            ChangeState(PigState.MovingInQueue);
            StartCoroutine(MoveInQueueCoroutine(targetPos, targetRot));
        }
    }
    
    private IEnumerator MoveInQueueCoroutine(Vector3 targetPos, [Bridge.Ref] Quaternion targetRot)
    {
        Vector3 startPos = rb.position;
        Quaternion startRot = rb.rotation;
        
        float distance = Vector3.Distance(new Vector3(startPos.x, 0, startPos.z), new Vector3(targetPos.x, 0, targetPos.z));
        float speed = 5f;
        float duration = distance / speed;
        
        if (duration < 0.2f) duration = 0.2f;
        
        float jumpHeight = 0.5f;
        float elapsed = 0;
        
        while (elapsed < duration)
        {
            if (this == null) yield break;
            
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            
            Vector3 currentPos = Vector3.Lerp(startPos, targetPos, t);
            currentPos.y += Mathf.Sin(t * Mathf.PI) * jumpHeight;
            
            rb.MovePosition(currentPos);
            rb.MoveRotation(Quaternion.Lerp(startRot, targetRot, t));
            
            yield return new WaitForFixedUpdate();
        }
        
        if (this != null)
        {
            rb.MovePosition(targetPos);
            rb.MoveRotation(targetRot);
            isOnTop = true;
            
            ChangeState(PigState.InQueue);
        }
    }
    
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("EndConveyor") && isOnBelt)
        {
            EventManager.OnPigEnterQueue?.Invoke(this);
        }
    }
}

