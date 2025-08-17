// La flag real está codificada
const encodedFlag = "ZmxhZ19tYW5pcHVsYXRlX2Nvb2tpZXNfc28wX2Zhc3k="; // "flag_manipulate_cookies_so0_fasy"

document.addEventListener('DOMContentLoaded', () => {
    // Establecer una cookie de "usuario"
    document.cookie = "is_admin=false; path=/";
});

function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Se asume que el usuario debe cambiar la cookie 'is_admin' a 'true'
    const cookies = document.cookie.split(';').map(c => c.trim());
    const isAdmin = cookies.some(cookie => cookie === 'is_admin=true');

    if (isAdmin) {
        if (flagInput === atob(encodedFlag)) {
            feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
            feedbackMessage.style.color = "green";
        } else {
            feedbackMessage.textContent = "¡Casi! ¡Eres admin, pero la flag es incorrecta! ❌";
            feedbackMessage.style.color = "red";
        }
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. No tienes permisos para ver la flag. ❌";
        feedbackMessage.style.color = "red";
    }
}