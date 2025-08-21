
let student = {
    "name":"Sithum",
    "age": 20,
    "subjects": ["Math", "Science", "English"],
}
console.log(student.subjects[0]); // Accessing the first subject within the subjects array

// Creating a json object , give it a name,price,category and stock
let product = {
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics",
    "stock": 50
};

if (product.stock > 0) {
    console.log(product.name); 
}

// Stringify is from object -> string
let students2 = JSON.stringify(student);
console.log(students2); // Convert the student object to a JSON string

//Parse is from string -> object
let students3 = JSON.parse(students2);
console.log(students3); // Convert the JSON string back to an object

/* Create a car object, brand model and year.
convert it to JSON String parse it back and log the brand */
let car = {
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2021
};
let carJson = JSON.stringify(car); // Convert car object to JSON string
let carObject = JSON.parse(carJson); // Parse the JSON string back to an object
console.log(carObject.brand); // Log the brand of the car object

let settings = {
    theme: "dark",
    fontSize: "16px",
}

localStorage.setItem("settings", JSON.stringify(settings)); // Store settings in localStorage as a JSON string

let saved = localStorage.getItem("settings"); // Retrieve the settings from localStorage
console.log(JSON.parse(saved)); // Parse the JSON string back to an object and log it


