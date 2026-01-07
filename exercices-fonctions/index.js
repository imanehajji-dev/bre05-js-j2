// Exercice 1 : Créer des fonctions pour les opération de base

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}


function mod(a, b) {
    return a % b;
}


console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0


// Exercice 2 : Une fonction pour interroger l'utilisateur
function askUserOperation() {
    return prompt("Quelle opération veux-tu faire ? (+, -, *, /, %)");
}

function askUserFirstNumber() {
    return Number(prompt("Choisis le premier nombre :"));
}

function askUserSecondNumber() {
    return Number(prompt("Choisis le second nombre :"));
}

//Exercice 3 : une fonction pour les gouverner toutes


function calculator() {
    const operation = askUserOperation();
    const a = askUserFirstNumber();
    const b = askUserSecondNumber();

    let result;

    if (operation === "+") {
        result = add(a, b);
    } else if (operation === "-") {
        result = sub(a, b);
    } else if (operation === "*") {
        result = mult(a, b);
    } else if (operation === "/") {
        result = div(a, b);
    } else if (operation === "%") {
        result = mod(a, b);
    } else {
        console.log("Opération invalide");
        return;
    }

    console.log("Résultat :", result);
}

calculator();
