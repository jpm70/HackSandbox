document.addEventListener('DOMContentLoaded', () => {
    // La flag se pasa como parámetro en la URL, por ejemplo:
    // https://tunombredeusuario.github.io/tu-repositorio/reto4.html?flag=flag_en_la_url_es_muy_obvia
    const urlParams = new URLSearchParams(window.location.search);
    const flag = urlParams.get('flag');
    
    const hintElement = document.getElementById('hint');
    if (flag) {
        hintElement.textContent = "El mensaje oculto es: " + flag;
    } else {
        hintElement.textContent = "No hay flag en la URL. ¡Añádela! Ejemplo: ?flag=TU_RESPUESTA";
    }
});

function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    const urlParams = new URLSearchParams(window.location.search);
    const correctFlag = urlParams.get('flag');

    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. ¿Verificaste bien la URL? ❌";
        feedbackMessage.style.color = "red";
    }
}