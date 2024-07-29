function changeGreeting() {
  // Get the input element and entered name, trim the white spaces if any
  var nameInput = document.getElementById("nameInput"); //method
  var name = nameInput.value.trim();

  // Check if the name is not empty
  if (name !== "") {
    // Get the heading element to display the greeting
    var greetingHeading = document.getElementById("greetingHeading");

    // Set the heading's inner HTML to include the greeting with the entered name
    greetingHeading.innerHTML = "Hi, " + name + "!"; //this is a js property

    // Clear the input field
    nameInput.value = "";
  } else {
    // If the name is empty, display an error prompt
    alert("Please enter your name before clicking the button.");
  }
}

function currentTime(){

  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString(); //dd/mm/yyyy
  var timeStr = currentDay.toLocaleTimeString();//time

  document.getElementById("time").innerHTML = "Time: " + dateStr + "<br />" + "Date: " + timeStr;
}

currentTime();
setInterval("currentTime()",1000);

//============================== animation when ansing question ===================//

// Array of possible answers
const answers = ['Yes', 'No', 'Maybe'];

// Function to check the selected answer
//selectedAnswer will contain the argument
function checkAnswer(selectedAnswer) {
  const resultElement = document.getElementById('result'); //method

  if (selectedAnswer === answers[0]) {
    resultElement.textContent = 'Thats great!';
  } else if (selectedAnswer === answers[1]) {
    resultElement.textContent = 'Well that is sad, hope you still enjoyed the page!';
  } else {
    resultElement.textContent = 'Nice! You learnt something!'; //change the resultElement paragraph id to the textcontent
  }
}

// validation, copied from bootstrap documentations
//declare an anonymus function
(() => {
  //start of anonymus function body\
  //execute all code in strict mode
  'use strict'

  //selects the form element with .needs-validation, then the code below will loop over all of the form inputs with the required tag
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over the input elements with the required tag and prevent submission
  Array.from(forms).forEach(form => { //array.from(forms) converts the nodelist into a array to use the foreach array method,The forEach() loop iterates over each form in the array and adds a submit event listener to each form
    form.addEventListener('submit', event => { //called on the form array which contains all the input elements needed for validation, then it keeps looping the code in the curly braces
      if (!form.checkValidity()) { //if return false, execute this code.inbuilt js function. .checkValidity returns true if all the required fields have the input and false if otherwise
        event.preventDefault()//if form not valid, ie. !form.checkValidity() == true, event.preventDefault() prevents submission 
        event.stopPropagation()//The event's propagation is also stopped using event.stopPropagation()
      } else {
        form.reset();
      }
      form.classList.add('was-validated') //if checkValidity is false, The was-validated class is a Bootstrap class that applies custom validation styles to the form controls based on their validation status. 
    }, false)
  })
})()

// Function to generate four lucky numbers and display them in the paragraph
function generateNumbers() {
  const luckyNumbers = [];
  // Generate four random numbers
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    luckyNumbers.push(randomNumber); //array methods
  }

  // Display the lucky numbers in the paragraph
  randomNumberGen.innerHTML = luckyNumbers.length + " Lucky Numbers: " + luckyNumbers.join(', '); //join each number in the array with ', '
} //change the innerhtml of the randomNumberGen referenced
  //luckynumbers.length is a array property

