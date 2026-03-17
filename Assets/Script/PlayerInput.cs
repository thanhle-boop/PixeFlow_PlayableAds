using System.Collections.Generic;
using UnityEngine;

public class PlayerInput : MonoBehaviour
{
    public LayerMask pigLayerMask;
    public Transform target;
    
    // private float lastClickTime = 0f;
    // private float clickCooldown = 0f;
    
    void Start()
    {
        
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0)) // Nhận cả chuột và chạm màn hình
        {
            HandleInput(Input.mousePosition);
            // if (Time.time - lastClickTime >= clickCooldown)
            // {
            //     HandleInput(Input.mousePosition);
            //     lastClickTime = Time.time;
            // }
        }
    }
    
    void HandleInput(Vector2 screenPos)
    {
        Ray ray = Camera.main.ScreenPointToRay(screenPos);
        RaycastHit hit;
        

        if (Physics.Raycast(ray, out hit, 100f, pigLayerMask))
        {
            PigComponent clickedPig = hit.collider.GetComponent<PigComponent>();

            if (clickedPig != null && clickedPig.isOnTop)
            {
                EventManager.OnClickPig?.Invoke(clickedPig);
            }
            else
            {
                SoundManager.Instance.PlaySound(SoundManager.Instance.invalidCat);
            }
        }
    }
}
