document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked == true){ //! if our celsius radio button is selected then do something
        temp = document.getElementById("textBox").value; //! this will extract the user input (the number a person typed into the enter a temperature label, however its a string so we have to convert it to a number)
        temp = Number(temp);    //! converts string to number
        temp = toCelsius(temp); //! invoke the toCelsius function
        document.getElementById("tempLabel").innerHTML = temp + "°C";    //! this will change the tempLabel to the converted number + °C

    }
    else if(document.getElementById("fButton").checked == true){    //! if our farenheit radio button is selected then do something
        temp = document.getElementById("textBox").value;    //! this will extract the user input (the number a person typed into the enter a temperature label, however its a string so we have to convert it to a number)
        temp = Number(temp);    //! converts string to number
        temp = toFarenheit(temp); //! invoke the toFarenheit function
        document.getElementById("tempLabel").innerHTML = temp + "°F";    //! this will change the tempLabel to the converted number + F

    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";   //! this will change the tempLabel to this "Select a unit text"
    

    }
}

function toCelsius(temp){
    return(temp - 32) * (5/9);
}

function toFarenheit(temp){
    return temp * 9 / 5 + 32;
}