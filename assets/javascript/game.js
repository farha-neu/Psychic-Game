var wins = 0;
var losses = 0;
var guessesArray = [];
var guessCount = 9;
var guessLeft = guessCount;
var html="";


document.onkeyup = function(event){
   
    var userGuess = event.key.toLowerCase();
    console.log("user: "+userGuess);

    var computerChoice =  String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    console.log("comp: "+computerChoice);
    var msg ="";
   
    if(userGuess === computerChoice){
        wins++;
        guessesArray = [];
        html = "";
        guessLeft = guessCount;
        document.querySelector("#win").innerHTML = wins;
    }
    else if(guessLeft === 1 && userGuess !== computerChoice){
        losses++;
        guessesArray = [];
        html="";
        guessLeft = guessCount;
        document.querySelector("#lose").innerHTML = losses;
    }
    else if(guessLeft > 1 && userGuess !== computerChoice){
        guessLeft--;
        guessesArray.push(userGuess);
        if(guessesArray.length === 1){
            html = userGuess;
        }
        else{
            html = html+", "+userGuess;
        }
    }
   

    document.querySelector("#guesses").innerHTML = html;
    document.querySelector("#guessLeft").innerHTML = guessLeft;


};
