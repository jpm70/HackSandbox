const secretKey = "cifrado_rot13";
const secretMessage = "Gur snt vf snt_vafcrp_gur_pbaqfbyr"; // ROT13 de "The flag is flag_inspec_the_console"

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

// Muestra una pista en la consola
console.log("¡Bienvenido al reto! El mensaje ha sido cifrado con la clave: " + secretKey);
console.log("El mensaje cifrado es: " + secretMessage);
console.log("La función para descifrar está lista, solo tienes que llamarla en la consola. ¡Usa 'rot13()'!");
console.log("Por ejemplo: console.log(rot13(secretMessage));");

function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');
    const correctFlag = "flag_inspec_the_console";
    
    if (flagInput === correctFlag) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. ¿Revisaste la consola? ❌";
        feedbackMessage.style.color = "red";
    }
}