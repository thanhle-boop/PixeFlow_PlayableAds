using System.Collections;
using UnityEngine;

public class FlashObject : MonoBehaviour
{
    [Header("Flash Settings")]
    [SerializeField] private float flashSpeed = 3f;
    [SerializeField] private float minAlpha = 0f;
    [SerializeField] private float maxAlpha = 0.8f;
    [SerializeField] private float flashDuration = 2f;
    
    private Renderer objectRenderer;
    private Material objectMaterial;
    private Color originalColor;
    private bool isFlashing = false;
    private Coroutine flashCoroutine;
    
    private void Awake()
    {
        objectRenderer = GetComponent<MeshRenderer>();
        objectRenderer.material.color = new Color(60f / 255f, 61f / 255f, 100f / 255f);
    }
    
    private void OnEnable()
    {
        EventManager.OnStartGame += ResetFlash;
        EventManager.OnQueueFull += StartFlashing;
        EventManager.OnQueueNotFull += StopFlashing;
    }
    
    private void OnDisable()
    {
        EventManager.OnStartGame -= ResetFlash;
        EventManager.OnQueueFull -= StartFlashing;
        EventManager.OnQueueNotFull -= StopFlashing;
    }
    
    private void ResetFlash()
    {
        StopFlashing();
        objectRenderer.material.color = new Color(60f / 255f, 61f / 255f, 100f / 255f);
        
        // Debug.Log(objectMaterial.color);
        // if (objectMaterial != null)
        // {
        //     Color resetColor = originalColor;
        //     resetColor.a = 0f;
        //     objectMaterial.color = resetColor;
        // }
    }
    
    private void StartFlashing()
    {
        if (!isFlashing)
        {
            isFlashing = true;
            
            if (flashCoroutine != null)
            {
                StopCoroutine(flashCoroutine);
            }
            
            flashCoroutine = StartCoroutine(FlashCoroutine());
        }
    }
    
    private void StopFlashing()
    {
        isFlashing = false;
        if (flashCoroutine != null)
        {
            StopCoroutine(flashCoroutine);
            flashCoroutine = null;
        }
        
        if (objectRenderer != null)
        {
            // Color resetColor = originalColor;
            // resetColor.a = 0f;
            // objectMaterial.color = resetColor;
            objectRenderer.material.color = new Color(60f / 255f, 61f / 255f, 100f / 255f);
        }
    }
    
    private IEnumerator FlashCoroutine()
    {
        float elapsedTime = 0f;
        float totalElapsed = 0f;
        
        bool isPingPong = true;
        
        while (isFlashing && totalElapsed < flashDuration)
        {
            // elapsedTime += Time.deltaTime * flashSpeed;
            // totalElapsed += Time.deltaTime;
            // if (objectMaterial != null)
            // {
            //     Color newColor = originalColor;
            //     newColor.a = alpha;
            //     objectMaterial.color = newColor;
            // }
            // float alpha = Mathf.Lerp(minAlpha, maxAlpha, Mathf.PingPong(elapsedTime, 1f));
            totalElapsed += Time.deltaTime;
            elapsedTime += Time.deltaTime;

            if (elapsedTime >= 0.2f)
            {
                elapsedTime = 0f;
                isPingPong = !isPingPong;
                if (isPingPong)
                {
                    objectRenderer.material.color = new Color(60f / 255f, 61f / 255f, 100f / 255f);
                    
                }
                else
                {
                    objectRenderer.material.color = new Color(1, 0, 0);
                }
            }
            
            yield return null;
        }

        StopFlashing();
    }
}

