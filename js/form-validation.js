
function listenForValidation() { //STEP 2: create a function to validate our form
  let formQuestionnaire = document.getElementById("form-questionnaire"); //call form by id =form-questionnaire, here formQuestionnaire
  formQuestionnaire.addEventListener("submit", validateFormQuestionnaire); // put an ear at the call, to happend validateFormQuestionnaire, when submit happend
}

function validateFormQuestionnaire(e) {//STEP 3. function to validate the form:  validate+id when submit happend
  let formQuestionnaire = e.target;
  let valid = true;
//STEP 4. describe the constants and what happend with them
  const EMAIL = formQuestionnaire["email"].value; //constante email asociada al nombre del imput
  if (!EMAIL || EMAIL == "") { //if emial is not appear or empty..
    e.preventDefault();
    document.getElementById("error-email").style.visibility = "visible"; //the span associate to id span appears
    console.log("*Email obligatorio"); //message by id span
  } else {
    document.getElementById("error-email").style.visibility = "hidden"; //else, don´t show the error message
  }

  const YEAR = formQuestionnaire["year"].value; //constante email asociada al nombre del imput
  if (!YEAR || YEAR == "") {
    e.preventDefault();
    document.getElementById("error-year").style.visibility = "visible";
    console.log("*Año obligatorio");
  } else {
    document.getElementById("error-year").style.visibility = "hidden";
  }

  const CITY = formQuestionnaire["city"].value; //constante email asociada al nombre del imput
  if (!CITY || CITY == "") {
    e.preventDefault();
    document.getElementById("error-city").style.visibility = "visible";
    console.log("*Ciudad obligatoria");
  } else {
    document.getElementById("error-city").style.visibility = "hidden";
  }

  const OPINION = formQuestionnaire["opinion"].value; //constante email asociada al nombre del imput
  if (!OPINION || OPINION == "") {
    e.preventDefault();
    document.getElementById("error-opinion").style.visibility = "visible";
    console.log("*Debes ingresar tu opnión"); //must be the text that show in case of error
  } else {
    document.getElementById("error-opinion").style.visibility = "hidden";
  }
//SETP 5. when the form isn´t valid accion the event "preventDefault"
  if (!valid) {
    e.preventDefault();
  } else { //else, we save the data that user had introduced
    saveData(EMAIL, YEAR, CITY, OPINION); //save data of constants
  }
}
//STEP 6. activated the function to save the data
function saveData(email, year, city, opinion) {
  localStorage.setItem("email", email); //must match with "id" and "name"
  localStorage.setItem("year", year);
  localStorage.setItem("city", city);
  localStorage.setItem("opinion", opinion);
}
//STEP 7. call again to the accition
listenForValidation();