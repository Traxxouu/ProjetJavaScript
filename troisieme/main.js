
// Sélections des boutons
const BoutonExercice1 = document.getElementById("Exercice1")
const BoutonExercice2 = document.getElementById("Exercice2")
const BoutonExercice3 = document.getElementById("Exercice3")
const BoutonExercice4 = document.getElementById("Exercice4")
const BoutonExercice5 = document.getElementById("Exercice5")
const BoutonExercice6 = document.getElementById("Exercice6")
const BoutonExercice7 = document.getElementById("Exercice7")
const BoutonExercice8 = document.getElementById("Exercice8")

//Résolutions des exercices

//Exercie 1
BoutonExercice1.addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        alert('Résultat Exercie 1 : ' + i)
    }
})

//Exercice 2
BoutonExercice2.addEventListener('click', function() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
        alert('Résultat Exercice 2 : ' + i)
    }
})

//Exercice 3
BoutonExercice3.addEventListener('click', function() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("somme des nombres de 1 à 100:", sum);
    alert("somme des nombres de 1 à 100 : " + sum)

})

//Exercice 4
BoutonExercice4.addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
        alert('5 x ' + i + ' = ' + 5 * i)
    }
    
})

//Exercice 5
BoutonExercice5.addEventListener('click', function() {
    let i = 1;
    while (i <= 10) {
        console.log(i * i);
        alert(i * i);
        i++;
    }
})


//Exercice 6
// Math.floor = 0.1 - 0.9 = 0
// Math.ceil = 0.1 / 0.9 = 1
// Math.Round = 0.1 = 0 / 0.9 = 1

BoutonExercice6.addEventListener('click', function() {
    let nb = Math.round(Math.random() * 10);
    let guess;

    do {
        guess = parseInt(prompt("Devinez un nombre entre 1 et 10:"));
        if (guess < nb) {
            console.log("C'est plus grand");
            alert("C'est plus grand")
        } else if (guess > nb) {
            console.log("C'est plus petit");
            alert("C'est plus petit")
        }
    } while (guess !== nb);

    console.log("Félicitations, vous avez trouvé le nombre!");
    alert("Félicitations, vous avez trouvé le nombre!");

})

//Exercice 7
BoutonExercice7.addEventListener('click', function() {
    for (let i = 1; i <= 20; i++) {
        if (i > 10) 
            break;
        else if (i % 3 !== 0) {
            console.log(i);
        }
    }    
})

// if else = ecriture ternaire

//Exercice 8
BoutonExercice8.addEventListener('click', function() {

    let height = parseInt(prompt("Entrez la hauteur du triangle (un nombre impair):"));

    if (height % 2 !== 0) {
        let mid = Math.floor(height / 2);
        for (let i = 0; i <= mid; i++) {
            let spaces = " ".repeat(mid - i);
            let stars = "*".repeat(2 * i + 1);
            console.log(spaces + stars + spaces);
        }
    } else {
        console.log("Veuillez entrer un nombre impair");
    }


})