using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class SpawnerManager : MonoBehaviour
{
    public int currentLevel = 0;
    
    public GameObject blockPrefab;
    public Transform blockSpawnPoint;
    public Transform blockGroup;
    
    public Transform pigSpawnPoint;
    
    public List<LevelDataSO> Levels;
    public float blockSpacing = 1.2f;
    
    public Transform pigSpawnPos;
    public GameObject pigPrefab;
    
    public List <Transform> allWaypoints;
    private Dictionary<int, List<PigComponent>> pigsByLane = new Dictionary<int, List<PigComponent>>();

    public List<Transform> queuePos;
    private List<PigComponent> pigsInQueue = new List<PigComponent>();
    public int _straightSlot = 0;
    public int _maxstraightSlot = 5;
    
    private int totalBlockCount = 0;

    private int score = 0;
    
    private bool isProcessingClick = false;
    
    [FormerlySerializedAs("slideOnStraight")]
    [SerializeField]
    [LunaPlaygroundField("Speed Move on Straight", 1, "Speed")]
    private float speedOnStraight = 1f;
    
    [SerializeField]
    [LunaPlaygroundField("Speed Move on Straight", 1, "Speed")]
    private float speedOnCurve = 0.5f;
    
    [SerializeField]
    [LunaPlaygroundField("Jump To Queue Speed", 5, "Speed")]
    private float jumpToQueueSpeed = 5f;
    
    void OnEnable()
    {
        EventManager.OnStartGame += SpawnMap;
        EventManager.OnClickPig += SelectPig;
        EventManager.OnPigEnterQueue += HandlePigEnterQueue;
        EventManager.OnBlockDestroyed += OnBlockDestroyed;
        EventManager.OnPigDestroyed += RefundStraightSlot;
        
        EventManager.OnWinGame += () =>
        {
            currentLevel++;
            SpawnMap();
        };
        
        EventManager.OnLoseGame += () =>
        {
            score = 0;
            StopAllPigAnimations();
        };
    }

    void OnDisable()
    {
        EventManager.OnStartGame -= SpawnMap;
        EventManager.OnClickPig -= SelectPig;
        EventManager.OnPigEnterQueue -= HandlePigEnterQueue;
        EventManager.OnBlockDestroyed -= OnBlockDestroyed;
    }
    private void RefundStraightSlot()
    {
        _straightSlot = _straightSlot - 1 < 0 ? 0 : _straightSlot - 1;
        UIManager.Instance.UpdateStraightSlot(_straightSlot,_maxstraightSlot);
    }

    private void ResetData()
    {
        pigsByLane.Clear();
        pigsInQueue.Clear();
        _straightSlot = 0;
        totalBlockCount = 0;
        UIManager.Instance.UpdateStraightSlot(_straightSlot,_maxstraightSlot);
    }
    
public void SelectPig(PigComponent pig)
    {
        if (pig == null || isProcessingClick) return;

        if (_straightSlot >= _maxstraightSlot)
        {
            EventManager.OnFullConveyorSlot?.Invoke();
            SoundManager.Instance.PlaySound(SoundManager.Instance.error);
            return;
        }
        
        if (pig.currentState != PigState.InLane && pig.currentState != PigState.InQueue)
        {
            return;
        }
        
        isProcessingClick = true;

        _straightSlot = _straightSlot + 1 > _maxstraightSlot ? _maxstraightSlot : _straightSlot + 1;
        UIManager.Instance.UpdateStraightSlot(_straightSlot,_maxstraightSlot);
        SoundManager.Instance.PlaySound(SoundManager.Instance.validCat);
        
        
        if (pigsInQueue.Contains(pig))
        {
            HandlePigClickedFromQueue(pig);
            StartCoroutine(ResetClickFlag());
            return;
        }
        
        // Pig ở trong lane - logic cũ
        int laneIndex = pig.laneIndex;
        
        if (!pigsByLane.ContainsKey(laneIndex))
        {
            isProcessingClick = false;
            return;
        }
        
        List<PigComponent> pigsInLane = pigsByLane[laneIndex];
        
        // Kiểm tra xem pig này có phải là con đầu hàng không (index = 0)
        if (pigsInLane.Count == 0 || pigsInLane[0] != pig)
        {
            isProcessingClick = false;
            return;
        }
        
        // Remove heo khỏi lane TRƯỚC KHI nó nhảy lên
        RemovePigFromLane(pig);
        
        pig.JumpTo(allWaypoints, () =>
        {
            // Callback rỗng - không cần làm gì vì đã remove trước đó
        });
        
        StartCoroutine(ResetClickFlag());
    }
    
    private IEnumerator ResetClickFlag()
    {
        yield return new WaitForSeconds(0.2f);
        isProcessingClick = false;
    }
    
    private void RemovePigFromLane(PigComponent removedPig)
    {
        int laneIndex = removedPig.laneIndex;
        
        if (!pigsByLane.ContainsKey(laneIndex)) return;
        List<PigComponent> pigsInLane = pigsByLane[laneIndex];
        pigsInLane.Remove(removedPig);
        pigsInLane.Sort((a, b) => b.transform.localPosition.z.CompareTo(a.transform.localPosition.z));
        
        for (int i = 0; i < pigsInLane.Count; i++)
        {
            Vector3 newLocalPos = pigsInLane[i].transform.localPosition;
            
            newLocalPos.z = -(i * blockSpacing); 
        
            pigsInLane[i].MoveTo(newLocalPos);
            
            pigsInLane[i].isOnTop = (i == 0);
        }
    }

    private void SpawnMap()
    {
        if (currentLevel >= Levels.Count) return;
        
        ResetData();
        
        UIManager.Instance.UpdateScore(score);
        foreach (Transform child in blockGroup) {
            Destroy(child.gameObject);
        }
        
        totalBlockCount = 0;

        LevelDataSO data = Levels[currentLevel];

        int W = data.width;
        int H = data.height;
        float offsetX = (W - 1) * blockSpacing / 2f;
        float offsetY = (H - 1) * blockSpacing / 2f;

        for (int y = 0; y < H; y++)
        {
            for (int x = 0; x < W; x++)
            {
                int index = y * W + x;
                string colorType = data.gridData[index];

                if (colorType == "empty") continue;
                Vector3 localPos = new Vector3(
                    (x * blockSpacing) - offsetX, 
                    0, 
                    ((H - 1 - y) * blockSpacing) - offsetY
                );
                Vector3 worldPos = blockSpawnPoint.TransformPoint(localPos);

                // Tạo block
                GameObject newBlock = (GameObject)Instantiate(blockPrefab, worldPos, Quaternion.identity, blockGroup);
                ApplyMaterial(newBlock, colorType);
                
                // Đếm block
                totalBlockCount++;
            }
        }
        
        SpawnPigs(Levels[currentLevel]);
    }

    private void SpawnPigs(LevelDataSO data)
    {
        // 1. Xóa heo cũ
        foreach (Transform child in pigSpawnPos) {
            Destroy(child.gameObject);
        }
        
        // 2. Clear dictionary
        pigsByLane.Clear();

        if (data.lanes == null || data.lanes.Count == 0) return;

        int laneCount = data.lanes.Count;
        float laneOffsetX = (laneCount - 1) * 0.85f / 2f;

        for (int i = 0; i < laneCount; i++)
        {
            var currentLane = data.lanes[i];

            if (!pigsByLane.ContainsKey(i))
            {
                pigsByLane[i] = new List<PigComponent>();
            }
            if (currentLane.pigs == null) continue;

            for (int j = 0; j < currentLane.pigs.Count; j++)
            {
                string colorType = currentLane.pigs[j].colorName;
                var bulletCount = currentLane.pigs[j].bullets;
                var color = GameUtility.GetColorByName(colorType);
                if (colorType == "empty") continue;
                Vector3 localPos = new Vector3(
                    (i * 0.85f) - laneOffsetX,
                    0,
                    -(j * 0.85f) 
                );

                Vector3 worldPos = pigSpawnPos.TransformPoint(localPos);
                
                // 2. Spawn heo
                GameObject newPig = Instantiate(pigPrefab, worldPos, Quaternion.identity, pigSpawnPos);

                
                PigComponent pigComp = newPig.GetComponent<PigComponent>();
                
                if (pigComp != null)
                {
                    pigComp.Initialize(colorType, bulletCount, i, color, speedOnStraight, speedOnCurve, jumpToQueueSpeed);

                    pigsByLane[i].Add(pigComp);
                    pigComp.isOnTop = (j == 0);
                    
                }

                var renderer = newPig.GetComponentInChildren<Renderer>();
                
                
                if (renderer != null)
                {
                    renderer.material.color = color;
                }
            }
        }
    }
    
    private void ApplyMaterial(GameObject obj, string colorName)
    {
        var renderer = obj.GetComponent<Renderer>();
        var blockComponent = obj.GetComponent<Block>();
        if (renderer == null || blockComponent == null) return;
        
        blockComponent.color = colorName;
        renderer.material.color = GameUtility.GetColorByName(colorName);
        
    }
    
    private void HandlePigEnterQueue(PigComponent pig)
    {
        if (pig == null) return;
        _straightSlot = _straightSlot - 1 < 0 ? 0 : _straightSlot - 1;
        UIManager.Instance.UpdateStraightSlot(_straightSlot,_maxstraightSlot);
        if (queuePos == null || queuePos.Count == 0)
        {
            return;
        }

        int queueIndex = FindNextAvailableQueueIndex();
        
        if (queueIndex >= 0 && queueIndex < queuePos.Count)
        {
            Vector3 targetPos = queuePos[queueIndex].position;
            Quaternion targetRot = queuePos[queueIndex].rotation;
            
            pigsInQueue.Add(pig);
            pig.JumpToQueue(targetPos, targetRot, queueIndex);
            
            if (pigsInQueue.Count >= queuePos.Count)
            {
                EventManager.OnQueueFull?.Invoke();
            }
        }
        else
        {
            if (GameManager.Instance == null)
            {
                return;
            }
        
            GameManager.Instance.GameOver();
        }
    }
    
    private int FindNextAvailableQueueIndex()
    {
        int occupiedCount = pigsInQueue.Count;
        
        if (occupiedCount < queuePos.Count)
        {
            return occupiedCount;
        }
        
        return -1; // Queue đầy
    }
    
    private void OnBlockDestroyed()
    {
        totalBlockCount--;
        score += 100;
        UIManager.Instance.UpdateScore(score);
        
        // Kiểm tra win condition
        if (totalBlockCount <= 0)
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.WinStage();
            }
        }
    }
    
    private void HandlePigClickedFromQueue(PigComponent pig)
    {
        int removedIndex = pigsInQueue.IndexOf(pig);
        
        if (removedIndex < 0) return;
        
        pigsInQueue.Remove(pig);
        
        pig.SetQueueIndex(-1);
        
        // Kiểm tra nếu queue không còn đầy (< 5)
        if (pigsInQueue.Count < queuePos.Count)
        {
            EventManager.OnQueueNotFull?.Invoke();
        }
        
        // Chỉ rearrange các heo từ vị trí removedIndex trở về sau
        RearrangeQueue(removedIndex);
        
        pig.JumpTo(allWaypoints, () =>
        {
        });
    }
    
    private void RearrangeQueue(int startIndex)
    {
        // Chỉ di chuyển các heo từ startIndex trở đi
        for (int i = startIndex; i < pigsInQueue.Count; i++)
        {
            if (i < queuePos.Count)
            {
                Vector3 targetPos = queuePos[i].position;
                Quaternion targetRot = queuePos[i].rotation;
                PigComponent pig = pigsInQueue[i];
                pig.MoveInQueue(targetPos, targetRot, i);
            }
        }
    }
    
    private void StopAllPigAnimations()
    {
        // Dừng animation của tất cả heo trong lanes
        foreach (Transform kvp in pigSpawnPos)
        {
            PigComponent pigComp = kvp.GetComponent<PigComponent>();
            if (pigComp != null)
            {
                pigComp.StopAllCoroutines();
            }
        }
    }
}
