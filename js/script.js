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
---------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------   Bonus   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
 - Ask name of passenger
 - Ask surname of passenger
 - Add controls to the values inserted by the user
 - Define functions to reduce the code used in the main part of the code
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/


/*
--------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Functions   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/
/**
 * Function that ask a passed question to the user unless the value inserted is ok.
 * @param {string} question Question to be asked in the prompt to the user.
 * @param {boolean} isNumber Boolean that tell to the function if it has to wait a number or a string.
 * @returns {string | number} If isNumber is true, returns a number otherwise a string.
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

/**
 * Function that calculate the price of the ticket
 * @param {bigint} numKm Number of km to be traveled
 * @param {bigint} priceKm Price for each km to be traveled
 * @param {bigint} age Age of the passenger (to define the discount)
 * @returns {decimal} Price as decimal (2 places)
 */
function CalculatePrice(numKm, priceKm, age){
  //Calculate basic price
  let price = numKm * priceKm;
  //If passenger is a child, subtract discount of 20%
  if(age < 18){
      price = price - (price*20)/100;
  }else if(age > 65){//else, if passenger is over 65, subtract discount of 40%
      price = price - (price*40)/100;
  }
  //Set 2 decimal places
  price = price.toFixed(2);
  return price;
}


/*
--------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Main program   ----------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------
*/
/** Price for each kilometer to be traveled */
const priceForKilometer = 0.21;
//Ask user to insert basic passenger info
/** Name of the passenger */
let nameOfPassenger = AskAndCheckToUser("Qual è il tuo nome?", false);
/** Surname of the passenger */
let surnameOfPassenger = AskAndCheckToUser("Qual è il tuo cognome?", false);
//Ask user to insert basic variables values
/** Number of kilometres to be traveled */
let numberOfKilometres = AskAndCheckToUser("Quanti chilometri devi percorrere?", true);
/** Age of the passenger */
let ageOfPassenger = AskAndCheckToUser("Quanti anni hai?", true);
/** Price to be payed by the passenger to travel the kilometres passed */
let price = CalculatePrice(numberOfKilometres, priceForKilometer, ageOfPassenger);

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