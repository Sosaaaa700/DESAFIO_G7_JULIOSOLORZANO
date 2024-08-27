function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function processText() {
    const inputText = document.getElementById("inputText").value;
    const action = document.querySelector('input[name="action"]:checked').value;
    let resultText = "";

    if (action === "encrypt") {
        resultText = encrypt(inputText);
    } else {
        resultText = decrypt(inputText);
    }

    document.getElementById("outputText").innerText = resultText;
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText").innerText;
    const tempInput = document.createElement("textarea");
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto copiado al portapapeles");
}
