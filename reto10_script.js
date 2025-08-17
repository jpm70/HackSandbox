document.addEventListener('DOMContentLoaded', () => {
    // Esta condición siempre es falsa
    if (1 === 2) {
        // Esta sección no se ejecuta, por lo que la bandera queda oculta
        const flagContainer = document.getElementById('flag-container');
        flagContainer.innerHTML = '<p>La flag es <strong>flag_logic_can_be_tricky</strong></p>';
    }
});

function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    // El jugador debe encontrar la flag en el código y modificar la condición para que se muestre
    const correctFlag = "flag_logic_can_be_tricky";
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. ¡Examina la lógica del código y cambia la condición! ❌";
        feedbackMessage.style.color = "red";
    }
}