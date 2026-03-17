using System;
using UnityEngine;
using UnityEngine.Serialization;

public class UIManager : Singleton<UIManager>
{
    public TMPro.TextMeshProUGUI straightSlotText;
    public TMPro.TextMeshProUGUI scoreText;
    public GameObject gameOverPanel;

    private void OnEnable()
    {
        EventManager.OnLoseGame += GameOver;
        EventManager.OnStartGame += StartGame;
        EventManager.OnFullConveyorSlot += OnInvalidExecution;
    }

    private void OnInvalidExecution()
    {
        straightSlotText.GetComponent<Animator>().SetTrigger("IsInvalid");
    }

    private void StartGame()
    {
        gameOverPanel.SetActive(false);
    }

    private void OnDisable()
    {
        EventManager.OnLoseGame -= GameOver;
    }
    
    private void GameOver()
    {
        gameOverPanel.SetActive(true);
    }
    public void OnDownloadButtonClicked()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    
    public void UpdateStraightSlot(float count,float maxSlot)
    {
        straightSlotText.text = count + "/" + maxSlot;
    }
    
    public void UpdateScore(int score)
    {
        scoreText.text = score.ToString();
    }
    
    public void RestartGame()
    {
        GameManager.Instance.StartGame();
    }
}
