function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    // La flag correcta se ha decodificado previamente y está en el código.
    const correctFlag = "flag_base64_inside_mefse_fully_and_faster_chains";
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. Inténtalo de nuevo. ❌";
        feedbackMessage.style.color = "red";
    }
}