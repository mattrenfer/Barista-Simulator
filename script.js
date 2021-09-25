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
function yesOrNo(a) {

  let yesOrNo = document.getElementById("yesOrNo");
  let choices = document.getElementById("coffeeChoices");
  let para = document.getElementById("responsePara");

  if (a === "yes") {

    // Show/hide Yes or No buttons
    yesOrNo.classList.remove("shown");
    yesOrNo.classList.add("hidden");
  
    // Show/Hide Coffee Type Choices
    choices.classList.remove("hidden");
    choices.classList.add("shown");
  
    para.innerHTML = "What kind of coffee shall we make?";
  } else {
    para.innerHTML = "Nah? That's cool I guess.";
  }


}

// Regular Coffee
function coffeeChoices(a) {
  let choices = document.getElementById("coffeeChoices");
  let para = document.getElementById("responsePara");
  let countdown = document.getElementById("countdown");
  let brewTimer = 11;
  let brewRate = 1000;
  
  if (a === "regular") {

    para.innerHTML = "Brewing...";

    choices.classList.remove("shown");
    choices.classList.add("hidden");
    
    // Brew Countdown
    setInterval(function() {
        
        if (brewTimer > 0) {
          brewTimer--;
          countdown.innerHTML = brewTimer;
        }

        if (brewTimer === 0) {
          para.innerHTML = "DONE BREWING";
          countdown.innerHTML = null;
        }

    }, brewRate); 
  }
}

