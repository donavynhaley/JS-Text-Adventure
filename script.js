class Player {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.damage = 0;
    }

    attack(enemy){
        enemy.hit(this.damage);
        if(enemy.getHealth() <= 0){
            delete this;
        }
    }
    getHealth(){
        return this.health;
    }
}

// Declaring variables from css data selectors
const output = document.getElementById('output');
const input = document.getElementById('input');


function newAction(action){
    action = action.toLowerCase();

    output.innerHTML = action;
}

// Checks for enter on input and calls next action and clears the field
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        newAction(input.value);
        clearInputField();
    }
});
// Looks for escape press
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 27){
        event.preventDefault();
    }
});

// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }

function clearInputField(){
    input.value = "";
}

function printToOutput (text){
    output.innerHTML = text;
}

// !---------- Main Game -------------!
printToOutput(`You are a Blood Hunter, feared by even the
most vile monstrosities throughout Faerun.
Commoners shut their windows and lock
their doors as you approach, and small
children cry at the sight of your unnatural
demeanor. Such is the burden of life as a
Blood Hunter.
Yesterday, you accepted a 100 gp
contract from Harbin Wester, the
townmaster of Phandalin, a small mining
town southeast of Neverwinter.
The contract is simple: hunt down the
werewolf that slaughtered two teenagers
during the last full moon and return to
Phandalin with the werewolf’s head. [Type 'Understood' to continue]`);

