
let nombre = 35;

while (nombre < 100) {
    let para = document.getElementById('paragraphe1').innerHTML = "Le capitaine a " + nombre + " ans";

    if (nombre < 18) {
        para = document.getElementById('paragraphe1').innerHTML += ", le capitaine est jeune.";
    }

    else if (18 <= nombre && nombre <= 50) {
        para = document.getElementById('paragraphe1').innerHTML += ", le capitaine n'est pas très vieux.";
    }

    else {
        para = document.getElementById('paragraphe1').innerHTML += ", le capitaine est vieux";
    }
}