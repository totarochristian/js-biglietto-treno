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
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/
 let numberOfKilometres = prompt("Quanti chilometri devi percorrere?");
 let ageOfPassenger = prompt("Quanti anni hai?");
