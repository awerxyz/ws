const answer = Math.floor(Math.random() * 10 + 1);       //! if we didnt put + 1 it would pick a random number between 0 and 9 AND WE WANT IT TO BE BETWEEN 1 TO 10
                                                        //! what this does is that it picks a random number between 1 and 10 
let guesses = 0;        //! this is gonna be the number of attempts it took us to guess the number

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value //! in other words guess = the number we write into the field
    guesses +=1;    //! if we click on the submit utton the number of attepts will increase by 1

    if(guess == answer){
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if( guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}