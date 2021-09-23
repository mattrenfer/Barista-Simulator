// Start the program & ask to make some coffee
function startBaristaSim () {
    let para = document.getElementById("responsePara");
    let yesOrNo = document.getElementById("yesOrNo");
    let start = document.getElementById("start-button");
    let reset = document.getElementById("reset-button");


    // Prompt
    para.innerHTML = "Wanna make some coffee?";

    // Show/Hide Yes or No Responses
    yesOrNo.classList.remove("hidden");
    yesOrNo.classList.add("shown");

    // remove start button
    start.classList.remove("shown");
    start.classList.add("hidden");

    //add reset button
    reset.classList.remove("hidden");
    reset.classList.add("shown");

}


// Yes
function yes() {
  let yesOrNo = document.getElementById("yesOrNo");
  let choices = document.getElementById("coffeeChoices");
  let para = document.getElementById("responsePara");

  yesOrNo.classList.remove("shown");
  yesOrNo.classList.add("hidden");

  choices.classList.remove("hidden");
  choices.classList.add("shown");

  para.innerHTML = "What kind of coffee shall we make?";
}


// No
function no() {
  let para = document.getElementById("responsePara");
  para.innerHTML = "Nah? That's cool I guess.";
}

// Coffee to Brew
function coffeeSelection() {
  let choices = document.getElementById("coffeeChoices");
  choices.innerHTML = "<h3 onclick='regular();'><a href='#'>Regular</a></h3><h3>Espresso</h3><h3>Mocha</h3>";
}


// Regular Coffee
function regular() {
  let para = document.getElementById("responsePara");
  para.innerHTML = "Great! Let's make some regular coffee";
}