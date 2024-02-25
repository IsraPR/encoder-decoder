ENCODE_KEYS = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

DECODE_KEYS = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}
function decodeMessage() {
    var message = document.getElementById("input").value;
    console.log(message);
    for (var key in DECODE_KEYS) {
        message = message.replace(new RegExp(key, "g"), DECODE_KEYS[key]);
    }
    console.log(message);
    document.getElementById("output").value = message;
    return message;
}

function encodeMessage() {
    var message = document.getElementById("input").value;
    console.log(message);
    var new_message = "";
    for (var i = 0; i < message.length; i++) {
        if (ENCODE_KEYS[message[i]] != undefined) {
            new_message += ENCODE_KEYS[message[i]];

        } else {
            new_message += message[i];
        }
    }
    document.getElementById("output").value = new_message;
    console.log(new_message);
    return new_message;
}

function copyToClipboard() {

    var copyText = document.getElementById("output");
    console.log(copyText.value);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied" + copyText.value);
}

