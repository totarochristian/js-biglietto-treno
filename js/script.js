/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
The program will ask the user for the number of kilometers he wants to travel and the age of the passenger.
Based on this information, he will have to calculate the total price of the trip, according to these rules:
  - the ticket price is defined on the basis of km (€0.21 per km)
  - a 20% discount must be applied for minors
  - a 40% discount should be applied for over 65s.
The final price output is put out in human form (with up to two decimals, to indicate cents on the price).
---------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Program steps   ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
 - Ask number of kilometers
 - Ask age of passenger
 - Define basic price calculated as num of km * 0.21
 - Nested if to choose the discount on the price (if the age allows it)
 - Transform the calculated price into human format
 - Save the variables values into html elements
 --------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------   Bonus   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
 - Ask name of passenger
 - Ask surname of passenger
 - Add controls to the values inserted by the user
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

/**
 * Function that ask a passed question to the user unless the value inserted is ok.
 * @param {string} question Question to ask in the prompt to the user.
 * @param {boolean} isNumber Boolean that tell to the function if it has to wait a number or a string.
 * @returns If isNumber is true, returns a number otherwise a string.
 */
function AskAndCheckToUser(question, isNumber){
  let noError = false;
  let tmp;
  //Unless there aren't errors
  while(!noError){
    //Ask to the user the question passed
    tmp = prompt(question);
    if(!tmp)//If nothing passed, show error
      alert("Il valore inserito è vuoto o nullo!");
    else if(isNumber && isNaN(tmp))//If aspect a number but pass a string, show error
      alert("Il valore inserito deve essere un numero!");
    else if(isNumber && !isNaN(tmp) && parseInt(tmp)<=0)//If aspect a number but pass a negative number, show error
      alert("Il valore inserito deve essere più grande di 0!");
    else if(!isNumber && !isNaN(tmp))//If aspect a string but pass a number, show error
      alert("Il valore inserito non può essere un numero!");
    else
      noError = true;
  }
  return tmp;
}

const priceForKilometer = 0.21;// Price in euro
//Ask user to insert basic passenger info
let nameOfPassenger = AskAndCheckToUser("Qual è il tuo nome?", false);
let surnameOfPassenger = AskAndCheckToUser("Qual è il tuo cognome?", false);
//Ask user to insert basic variables values
let numberOfKilometres = AskAndCheckToUser("Quanti chilometri devi percorrere?", true);
let ageOfPassenger = AskAndCheckToUser("Quanti anni hai?", true);
//Define the basic price
let price = numberOfKilometres * priceForKilometer;
//If passenger is a child, subtract discount of 20%
if(ageOfPassenger < 18){
    price = price - (price*20)/100;
}else if(ageOfPassenger > 65){//else, if passenger is over 65, subtract discount of 40%
    price = price - (price*40)/100;
}
//Set 2 decimal places
price = price.toFixed(2);
//Print result in the console
console.log("------- Passenger info -------");
console.log("Kilometers to be traveled: " + numberOfKilometres);
console.log("Age: " + ageOfPassenger);
console.log("Price: " + price + "€");
console.log("------------------------------");
//Save variables values into input elements fields
document.getElementById("inputName").value = nameOfPassenger;
document.getElementById("inputSurname").value = surnameOfPassenger;
document.getElementById("inputAge").value = ageOfPassenger;
document.getElementById("inputKilometres").value = numberOfKilometres;
document.getElementById("inputPrice").value = price;