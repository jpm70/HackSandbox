function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Código ofuscado. El usuario debe analizar y desofuscar esto.
    const _0x4d59=['\x66\x6C\x61\x67','\x6F\x62\x66\x75\x73\x63\x61\x74\x65\x64','\x6A\x73'];
    const _0x1c8b=[_0x4d59[0],_0x4d59[1],_0x4d59[2]].join('_');
    
    if (flagInput === _0x1c8b) {
        feedbackMessage.textContent = "¡Felicidades! ¡Flag encontrada! ✅";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Respuesta incorrecta. Este código es un poco más complicado. ❌";
        feedbackMessage.style.color = "red";
    }
}