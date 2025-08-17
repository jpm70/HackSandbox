function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    const correctFlag = "flag_not_all_secrets_are_visible";
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. ¡Echa un vistazo al CSS! ❌";
        feedbackMessage.style.color = "red";
    }
}