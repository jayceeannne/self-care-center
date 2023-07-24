/*Iteration 1
When a user selects a message option and then clicks the “Receive Message” 
button, the user sees a random message from the list of possible messages 
for that category. When the message appears, the mediation icon 
disappears from the message area
*/

var currentMessage; 


var affirmation = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
];
var mantra = [
    "All things work together for good.",
    "Do not let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
];

//querySelectors
var affirmationButton = document.querySelector('#affirmationButton');
var mantraButton = document.querySelector('#mantraButton');
var receiveMessage =document.querySelector('.receiveMessageButton');
var currentSaying = document.querySelector('.current-message')

//event listners
affirmationButton.addEventListener('click', affirmation);
mantraButton.addEventListener('click', mantra);
receiveMessage.addEventListener('click', displayMessage);


//functions
function shuffle(array) {
    return Math.floor(Math.random() * array.length);
  };

function getRandomAffirmation() {
// create an for loop to go throught the array
//invoke shuffle function 
//stored in a variable 
    var randomAffirmationIndex = shuffle(affirmation)
    var randomAffirmation = affirmation[randomAffirmationIndex]
    console.log(randomAffirmation)
    return randomAffirmation;
}
console.log(getRandomAffirmation())

function getRandomMantra() {
    var randomMantraIndex = shuffle(mantra)
    var randomMantra = mantra[randomMantraIndex]
    console.log(randomMantra)
    return randomMantra
}
console.log(getRandomMantra())

//When the user gets on the website they have the option to click on affirmation or mantra 
//The radio buttons need to be connected to the functions getRandom.. 
//event listener needs to be connected to the function 
// create a conditional 

function checkButtonClicked() {
    if (affirmationButton.checked){
        currentMessage = getRandomAffirmation()
    } else if(mantraButton.checked) {
        currentMessage = getRandomMantra()
    }
    return currentMessage
}

function displayMessage () {
    checkButtonClicked()
    currentSaying.innerText = currentMessage
}
