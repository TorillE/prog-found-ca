

//Question 1 Declare and initialise a variable with a string value.

var myString = ["one", "two", "three"];

//Question 2 Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {

    age: 26,  
    eyeColour: "brown"
};

//Question 3  Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock. 
//If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock = true) { 
    console.log ("Out of stock");
}
else {
    console.log("In stock");
}; 

//Question 4  Create an array of five numbers. Loop through the array and console log each value.

var myNumbers = [1,2,3,4,5]; 

for(var i = 0; i < myNumbers.length; i++) {

    console.log(myNumbers[i]);

};

//Question 5 Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for(var i = 15; i <= 25; i++) {
    console.log(i);
}; 

//Question 6 Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for(var i = 15; i <= 25; i++) {
    console.log(i===20);
}; 

//Question 7 Create an array of two objects. Each object must have the same three properties (with different values):
//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.

var myCats = [

{
    name: "fluffy",
    age: 16,
    inDoorCat: true 

}, 
{
    name: "missy",
    age: 4,
    inDoorCat: false 
}

]; 

for(var i = 0; i < cmyCats.length; i++) {

    console.log(myCats[i].inDoorCat);
    console.log(myCats[i].age);

};

//Question 8

//Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.Inside the function, log the string "I don't like " together with the argument.

//Call the function and pass in a value of your choice.

function whatIDontLike(itemOfFood){
 
    var dislike = itemOfFood;
    console.log("I don't like" + dislike);
 
 }

 whatIDontLike("caviar");

 //Question 9 Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

 function AddTwoNumbers(number1, number2) {
    
    var sub = number1 - number2;
    console.log(sub);
}

//Question 10 Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array.

//Call the function and pass in a value of any type.

var fruitArray = []; 

function myFruits(theFruit) {

    fruitArray.push(theFruit);

}

myFruits(apple);