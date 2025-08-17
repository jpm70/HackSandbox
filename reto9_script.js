// La clave está oculta en una variable
const key = "vigenere";

// La función para descifrar el mensaje
function vigenereDecrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Mayúsculas
            result += String.fromCharCode(((char - 65 - (key.charCodeAt(i % key.length) - 97) + 26) % 26) + 65);
        } else if (char >= 97 && char <= 122) { // Minúsculas
            result += String.fromCharCode(((char - 97 - (key.charCodeAt(i % key.length) - 97) + 26) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    // El mensaje cifrado para este reto es: "Xyv kfymu is xyv fymu_jcyz_is_vyrf_dxy_qyif"
    // Descifrado con la clave "vigenere", el resultado es "The flag is the flag_vigenere_is_very_easy"
    const correctFlag = "flag_vigenere_is_very_easy";
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. La clave está oculta en el código. ¡Búscala! ❌";
        feedbackMessage.style.color = "red";
    }
}