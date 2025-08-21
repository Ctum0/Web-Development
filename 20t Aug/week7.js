/* Favourite Item
1) Create a small form with a input and a button "Save Food"
2) On button Click
    - Take input text
    - Save into local storage as JSON Array (array of food)
3) Display all the food from the local storage*/

let foodArray = []; // Creating an empty array to store food items
function savingfood(){ 
    let foodInput = document.getElementById("food").value // Get the value from the input field
    foodArray.push(foodInput); // Add the input value to the foodArray
    localStorage.setItem("foodInput", JSON.stringify(foodArray)); // Save the foodArray to localStorage as a JSON string
    document.getElementById("output").innerHTML = JSON.parse(localStorage.getItem("foodInput")); // Display all food items from localStorage
}

