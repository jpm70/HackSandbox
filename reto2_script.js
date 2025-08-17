function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    
     La flag se extrae del DOM, pero el usuario la debe encontrar
    const correctFlagElement = document.querySelector('.hidden-flag p');
    const correctFlag = correctFlagElement.textContent.trim().split( )[2];
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = ¡Felicidades! ¡Flag encontrada! ✅;
        feedbackMessage.style.color = green;
    } else {
        feedbackMessage.textContent = Respuesta incorrecta. ¡Usa tus herramientas! ❌;
        feedbackMessage.style.color = red;
    }
}