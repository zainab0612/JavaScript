// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

var ZakatPercentage = 0.025;
var UserInput = +prompt("Enter Your Total Amount:");
var Result = ZakatPercentage * UserInput
alert("Your Zakat Value is" +" "+Result);

// Task 2:
// Calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var FamilyMembers = +prompt ( "Enter Your Total Family Members:" );
var FitrahMethod = +prompt ( "Choose a Fitrah Method:\n 1. Wheat\n 2. Dates\n 3. Barley\n 4. Raisin" );
var Wheat = 250;
var Dates = 2100;
var Barley = 450;
var Raisin = 2800;
if ( FitrahMethod === 1 )
{
    var FitrahAmount = FamilyMembers * Wheat;
    alert ( "Your Fitrah Amount is " +FitrahAmount );
}
else if ( FitrahMethod === 2 ) {
    var FitrahAmount = FamilyMembers * Dates;
    alert ( "Your Fitrah Amount is " +FitrahAmount );
}
else if ( FitrahMethod === 3 ) {
    var FitrahAmount = FamilyMembers * Barley;
    alert ( "Your Fitrah Amount is " +FitrahAmount );
}
else if ( FitrahMethod === 4 ) {
    var FitrahAmount = FamilyMembers * Raisin;
    alert ( "Your Fitrah Amount is " +FitrahAmount );
}
else {
    alert ( "Your Input doesn't Exist" );
    }

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var SecretNumber = 6;
var GuessNumber = +prompt ( "Guess Any Number Between 1 to 10" );
if ( GuessNumber === SecretNumber) 
{
    alert ( "Congratulations! You Guess the Secret Number" );
}
else if (GuessNumber < SecretNumber)
{
    alert ( "Your value is low, Guess Again" );
    
}
else if (GuessNumber > SecretNumber)
{
    alert ( "Your value is high, Guess Again" );
    
}
else 
{
    alert ( "You don't Type a Number");  
}

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

 var name = prompt ( "Enter Your Name:");
 var NewName = name.charAt(0);
 var NewName1 = name.slice(1)
 alert ( NewName.toUpperCase() + NewName1.toLowerCase() );

//  Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.

var ContactNames = [];
var ContactNumbers = [];
var Name1 = prompt ( "Enter First Name:");
var Name2 = prompt ( "Enter Second Name:");
var Name3 = prompt ( "Enter Third Name:");
var Name4 = prompt ( "Enter Four Name:");
ContactNames.push( Name1 , Name2 , Name3 , Name4 );
var Number1 = prompt ( "Enter First Number:");
var Number2 = prompt ( "Enter Second Number:");
var Number3 = prompt ( "Enter Third Number:");
var Number4 = prompt ( "Enter Four Number:");
ContactNumbers.push( Number1 , Number2 , Number3 , Number4 );
console.log("Contact Name: " +ContactNames[0]+ " Contact Number: " +ContactNumbers[0] );
console.log("Contact Name: " +ContactNames[1]+ " Contact Number: " +ContactNumbers[1] );
console.log("Contact Name: " +ContactNames[2]+ " Contact Number: " +ContactNumbers[2] );
console.log("Contact Name: " +ContactNames[3]+ " Contact Number: " +ContactNumbers[3] );


// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var ProductsNames = [ " 7up ", " Pepsi ", " CocaCola "," Dew "," Mirinda "];
alert ( ProductsNames );
var UserInput =  +prompt ( "Enter the position of any Element " );
var RemoveItem = ProductsNames.splice (+UserInput,1);
alert ("Remove Item: " +RemoveItem);
alert ("Remaining Items in the Array\n " +ProductsNames);
alert ( "Total Number of items Remaining: " +ProductsNames.length);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var Nationality = prompt ("Enter your Nationality: ");
var Gender = prompt (" Enter your gender: ");
var Age = +prompt ( "Enter your Age: ");
if ( (Nationality === "Pakistani" || Nationality === "pakistani") || (Nationality === "Indian" || Nationality === "indian") )
{ if ( (Gender === "Male" || Gender === "male") && Age >= 18 ){
    alert ( " You are Eligible to vote " );
}
else if ( (Gender === "Female" || Gender === "female") && Age > 18 ){
    var MaritalStatus = prompt ( "Enter you Marital Status: ");
    if ( MaritalStatus === "Married" || MaritalStatus === "married"){
        alert ( " You are Eligible to vote " );
    }
    else {
        alert ( "Sorry! You are not Eligible to vote " );
    }
}
else if (Age < 18 ){
    alert ( "Sorry! You are under 18" );
}
else{
}
    
}
else{
    alert ( "Sorry! You are not Eligible to vote " );
}

// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

var WorldCupSquad = [ "Babar Azam ", "Shadab Khan ", "Asif Ali ", "Fakhar Zaman ", "Haider Ali ", "Haris Rauf ", "Iftikhar Ahmed "
 ,"Shaheen Shah Afridi ", "Mohammad Hasnain ", "Mohammad Nawaz ","Naseem Shah ", "Mohammad Rizwan ", "Mohammad Wasim ","Khushdil Shah " , "Shan Masood " ];
var FinalTeamPlayers = WorldCupSquad.slice(0,11);
alert ("Pakistani Teams Player selected for WorldCup:\n\n " +WorldCupSquad );
alert ( "Final Team Players that will be playing in tomorrow Match:\n\n " +FinalTeamPlayers);