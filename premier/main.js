
console.log("bonjour")


// Sélection du bouton -  bonjour
const boutonPrenom = document.getElementById("prenom");
const boutonFamille = document.getElementById('famille');
const boutonAge = document.getElementById('age');
const boutonLieu = document.getElementById('lieu');
const boutonAdition = document.getElementById("adition");
const boutonNote = document.getElementById("exercice4")
const boutonchiffre = document.getElementById("exercice3")




boutonPrenom.addEventListener('click', function() {

    const name = prompt("Quel est ton prénom");
    console.log(name);
    alert('Bonjour ' + name);
});


boutonFamille.addEventListener('click', function() {

    const surname = prompt("Quel est ton nom de famille ?");
    console.log(surname);
    alert('Bonjour ' + surname);
})

boutonAge.addEventListener('click', function() {

    const age = prompt("Quel est ton age ?");
    console.log(age);
    alert('Tu as ' + age + 'ans');
})

boutonLieu.addEventListener('click', function() {

    const lieu = prompt("d'ou vient tu ?");
    console.log(lieu);
    alert('Tu viens de ' + lieu);
})


boutonAdition.addEventListener('click', function() {

    const firstnum = parseFloat(prompt("Entre un premier nombre : "))
    const SecondNum = parseFloat(prompt("Entre un second nombre : "))
    let adition = firstnum + SecondNum
    alert('Le resultat de votre adition est ' + adition)
})




let num = 18
let bool = true
let str = "bonjour"
console.log(typeof(num))
console.log(typeof(bool))
console.log(typeof(str))
console.log(typeof(prompt))



const secondsInput = document.getElementById('seconds');
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('result');


function convertirSecondes(secondes) {
    const heures = Math.round(secondes / 3600); //heures
    const minutes =  Math.round(secondes % 3600 / 60); //minutes
    const secondesRestantes = Math.round(secondes % 60); //secondes
    
    return `${heures} heures, ${minutes} minutes, ${secondesRestantes} secondes`;
}

// bouton de conversion
convertButton.addEventListener('click', function() {
    const secondes = parseInt(secondsInput.value); 
    if (isNaN(secondes) || secondes < 0) {
        resultDisplay.textContent = "Veuillez entrer un nombre valide de secondes.";
    } else {
        const resultat = convertirSecondes(secondes);
        resultDisplay.textContent = resultat; 
    }
});


boutonNote.addEventListener('click', function() {
    const number1 = parseFloat(prompt("Entre le 1er nombre"))
    const number2 = parseFloat(prompt("Entre le second nombre"))
    const number3 = parseFloat(prompt("Entre le troisième nombre"))
    const toutnombre = number1 + number2 + number3

    const avg = Math.round( toutnombre / 3)

    if(avg >= 10) {
        alert("Tu as la moyenne")
        alert("force à toi")
        alert("non vraiment force")
    } else {
        alert("Tu n'as pas la moyenne")
    }



})

boutonchiffre.addEventListener('click', function() {
    let number1 = prompt("Donne moi un chiffre");
    let number2 = prompt("Donne moi un second chiffre");

    if (number1 >= number2) {
        alert(number1);
    } else {
        alert(number2);
    }
})



boutonNote.addEventListener('click', function() {
    const note = parseFloat(prompt("Quelle est ta note ? :"))
    if (note < 10) {
        alert("Ta note est inférieur à la moyenne")
    } else {
        alert("Ta note est supérieur à la moyenne")
    }
});

