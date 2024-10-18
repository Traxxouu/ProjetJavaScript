//Ajout des bouttons- fonctions
const BoutonExercice1 = document.getElementById("Exercice1")
const BoutonExercice2 = document.getElementById("Exercice2")
const BoutonExercice3 = document.getElementById("Exercice3")
const BoutonExercice4 = document.getElementById("Exercice4")
const BoutonExercice5 = document.getElementById("Exercice5")
const BoutonExercice6 = document.getElementById("Exercice6")

//Réponses aux exercices sur les fonctions
//Exercice 1
BoutonExercice1.addEventListener('click', function() { // fonction anonyme : function()
    function sayHello(prenom) {
        alert("Bonjour " + prenom);
        console.log(`Bonjour, ${prenom}`);
    }
    
    let prenom = prompt("Entrez votre prénom:");
    sayHello(prenom);
    
})



//Exercice 2
BoutonExercice2.addEventListener('click', function() {
    function add(a, b) {
        return a + b;
    }
    
    let num1 = parseFloat(prompt("Entrez le premier nombre:"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre:"));
    console.log(`La somme de ${num1} et ${num2} est ${add(num1, num2)}`);
    alert("La somme de " + num1 + " + " + num2 + " = "  + add(num1, num2));
    
})


//Exercice 3
BoutonExercice3.addEventListener('click', function() {
    function convertRadToDeg(radians) {
        return radians * (180 / Math.PI);
    }
    
    let radians = parseFloat(prompt("Entrez un angle en radians:"));
    console.log(`L'angle en degrés est: ${convertRadToDeg(radians)}`);
    alert("L'angle en degrés est: " + convertRadToDeg(radians))
    
})

//Exercice 4 
BoutonExercice4.addEventListener('click', function() {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let min = parseInt(prompt("Entrez le nombre minimum:"));
    let max = parseInt(prompt("Entrez le nombre maximum:"));
    console.log(`Nombre aléatoire entre ${min} et ${max}: ${random(min, max)}`);
    alert("Nombre aléatoire entre " + min + " et " + max + " : " + random(min, max))

})

//Exercice 5
BoutonExercice5.addEventListener('click', function() {
    function isPalindrome(str) {
        let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }
    
    let word = prompt("Entrez un mot pour vérifier s'il est un palindrome:");
    console.log(`"${word}" est un palindrome? ${isPalindrome(word)}`);
    alert(word + " est il un palindrome ? : " + isPalindrome(word));
    

})

//Exercice 6
BoutonExercice6.addEventListener('click', function() {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    let number = parseInt(prompt("Entrez un nombre pour calculer sa factorielle:"));
    console.log(`La factorielle de ${number} est ${factorial(number)}`);
    alert("la factorielle de " + number + " est " + factorial(number));

})

// arrow function
// const factorial = n => n === 1 ? 1 : n * factorial(n-1);

// Ajout des boutons - les classes
const BoutonExercice11 = document.getElementById("Exercice1.1")
const BoutonExercice21 = document.getElementById("Exercice2.1")
const BoutonExercice31 = document.getElementById("Exercice3.1")
const BoutonExercice41 = document.getElementById("Exercice4.1")
const BoutonExercice51 = document.getElementById("Exercice5.1")
const BoutonExercice61 = document.getElementById("Exercice6.1")

//Réponses aux exercices sur les classes
BoutonExercice11.addEventListener('click', function() { 
    class Person {
        constructor(nom, prenom, age) {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
        }
    
        hello() {
            console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans.`);
            alert("Bonjour, je m'appelle " + this.prenom +  this.nom + " , j'ai " + this.age + " ans.")
        }
    }
    
    let person = new Person("Barbe", "Maël", 18);
    person.hello();
    
})

BoutonExercice21.addEventListener('click', function() {
    class Person {
        constructor(nom, prenom, age) {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
        }
    
        hello() {
            console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans.`);
            alert("Bonjour, je m'appelle " + this.prenom +  this.nom + " , j'ai " + this.age + " ans.")
        }
    }

    let person = new Person("Barbe", "Maël", 18);
    person.hello();

    
    class Student extends Person {
        constructor(nom, prenom, age, identifiant) {
            super(nom, prenom, age);
            this.identifiant = identifiant;
        }
    
        hello() {
            console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, étudiant avec l'identifiant ${this.identifiant}, et j'ai ${this.age} ans.`);
            alert("Bonjour , je suis " + this.prenom + this.nom + " , étudiant avec l'identifiant" + this.identifiant + " , et j'ai " + this.age + " ans.")
        }
    }
    
    let student = new Student("Martin", "Alice", 22, "A12345");
    student.hello();
    
    
})

BoutonExercice31.addEventListener('click' , function() {


    class Person {
        constructor(nom, prenom, age) {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
        }
    
        hello() {
            console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans.`);
            alert("Bonjour, je m'appelle " + this.prenom +  this.nom + " , j'ai " + this.age + " ans.")
        }
    }

    let person = new Person("Barbe", "Maël", 18);
    person.hello();

    
    class Student extends Person {
        constructor(nom, prenom, age, identifiant) {
            super(nom, prenom, age);
            this.identifiant = identifiant;
        }
    
        hello() {
            console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, étudiant avec l'identifiant ${this.identifiant}, et j'ai ${this.age} ans.`);
            alert("Bonjour , je suis " + this.prenom + this.nom + " , étudiant avec l'identifiant" + this.identifiant + " , et j'ai " + this.age + " ans.")
        }
    }
    
    let student = new Student("Martin", "Alice", 22, "A12345");
    student.hello();

    alert("Il y a 2 personne")

})