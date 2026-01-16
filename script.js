"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Iterate through the characters array and output each character's name to the console using console.log(). Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".
const namesList = document.getElementById("names-list");
// assigning i as 0, then counting how many names are in the array and making sure it doesnt go over the count then adds 1
for (let i = 0; i < characters.length; i++) {
  //print in console
  const character = characters[i];
  console.log(character.name);
  
//add li elements to the html page
  const list = document.createElement("li");
  list.textContent = character.name;
  namesList.appendChild(list);
}
// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list element with the id "young-characters-list".
const youngCharacters = document.getElementById("young-characters-list");

//filtering to find the characters with an age less than 40
const youngCharactersAge = characters.filter(character => character.age < 40);

//printing to the console
youngCharactersAge.forEach(character => {console.log(character.name)
//adds a new li element for each of the names in the list to show on the page
const list = document.createElement("li");
list.textContent = character.name;
youngCharacters.appendChild(list);
});

// 3. Build a reusable function that accepts an array of character objects as a parameter. 
// Inside the function, iterate through the array and extract each character's name property. 
// Dynamically generate <li> elements for each name and append them to a target HTML list element.
//  Call this function with the characters array and render the results in the unordered list with id "function-list".

//function takes 2 variables, the array and another constant to be able to iterate through the names as its assigned to it
function characterNameList(array, listedCharacters) {
  array.forEach(character => {
    console.log(character.name);

    const list = document.createElement("li");
    list.textContent = character.name;
    listedCharacters.appendChild(list);
  });
}
//calling the function
const characterNameListed = document.getElementById("function-list");
characterNameList(characters, characterNameListed);
// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. 
// Inside the function, filter the array to include only characters whose age is below the threshold value. 
// For each filtered character, create an <li> element with their name and append it to the target list. 
// Call this function and render the results in the unordered list with id "age-filter-list".
const characterListByAge = document.getElementById("age-filter-list");

function ageFilterList(array, ageFilter) {
  const filteredAgeList = array.filter(character => character.age < ageFilter);

  filteredAgeList.forEach(character => {console.log(character.name);
    const list = document.createElement("li");
    list.textContent = character.name;
    characterListByAge.appendChild(list);
  });
}

ageFilterList(characters, 55);

// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. 
// Before accessing the name property of each character object, check whether the "name" property exists. 
// If a character object is missing the name property, use console.error() to log a descriptive error message to the console,
//  and dynamically create and display the error message in the HTML div element with id "error-messages".

const characterNameCheck = document.getElementById("error-messages");

function characterNameWithError(array, listedCharacters, errorElement) {
  array.forEach(character => {
    if (!character.name) {
      const errorMessage = `Error: The Character with ID of ${character.id} and Age of ${character.age} does not have a listed name.`;
    
      console.error(errorMessage);
      const errorMessagePrint = document.createElement("p");
      errorMessagePrint.classList.add("error-message")
      errorMessagePrint.textContent = errorMessage;
      errorElement.appendChild(errorMessagePrint);
      return
    }

     

    const list = document.createElement("li");
    list.textContent = character.name;
    listedCharacters.appendChild(list);
  });
}
//calling the function
const errorHandlingList = document.getElementById("error-handling-list");
const errorMessages = document.getElementById("error-messages");

characterNameWithError(characters, errorHandlingList, errorMessages);

// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties 
// (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5.
//  Verify that your error handling correctly identifies the missing name properties, 
// logs appropriate error messages to the console, and displays those error messages in the HTML div element with id 
// "broken-array-errors".
const brokenCharacters = [
  { id: 1, age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

const brokenArrayList = document.getElementById("broken-array-list");
const brokenArrayErrors = document.getElementById("broken-array-errors");

characterNameWithError(brokenCharacters, brokenArrayList, brokenArrayErrors);