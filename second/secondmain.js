const buttonSwitch = document.getElementById("Switch")
const buttonTernaire = document.getElementById("operateurTernaire")

buttonSwitch.addEventListener('click' ,function() {
    const number1 = parseFloat(prompt("Choisie un nombre"))
    const number2 = parseFloat(prompt("Choisie un second nombre"))
    const calcul =  prompt("Donne moi l\'opération")

    switch(calcul) {
        case '+': {
            alert(number1 + number2);
            break
        }
        case '-' : {
            alert(number1 - number2);
            break
        }
        case '/' :{
            alerr(number1 / number2);
            break
        }
        default: {
            alert("Opérateur non reconnu");
        }
    }


})

// operateur ternaire
buttonTernaire.addEventListener('click' ,function() {
    const age = parseFloat(prompt("Entrer un nombre"))
    alert(age >=18 ? 'Mageur' : "Mineur")
})
alert(age >= 18 ? 'Mageur' : "Mineur")

