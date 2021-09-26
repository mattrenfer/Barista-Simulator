var level = 1;

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

// Brew Regular Coffee
function coffeeChoices(a) {
  let choices = document.getElementById("coffeeChoices");
  let pour = document.getElementById("brewPour")
  let para = document.getElementById("responsePara");
  let countdown = document.getElementById("countdown");
  let brewTimer = 4;
  let brewRate = 1000;
  
  if (a === "regular") {

    para.innerHTML = "Brewing...";
    countdown.innerHTML = brewTimer;

    choices.classList.remove("shown");
    choices.classList.add("hidden");
    
    // Brew Countdown
    let brewInterval = setInterval(function() {
        
        // timer countdown
        if (brewTimer > 0) {
          brewTimer--;
          countdown.innerHTML = brewTimer;
          console.log(brewTimer);
        }

        // when the brew timer ends
        if (brewTimer === 0) {
          para.innerHTML = "DONE BREWING<br /><img src='img/coffee-pot.png' width='25%' height='25%' />";
          countdown.innerHTML = null;
          clearInterval(brewInterval); // stops the timer

          pour.classList.remove("hidden");
          pour.classList.add("shown");

        }

       // timer interval
    }, brewRate); 
  }

  if (a === "espresso" & level === 1)  {
    para.innerHTML = "You haven't the skillz to make an espresso yet!<br /> Learn how to brew better, bro."
  } else {
    para.innerHTML = "Let's make an espresso."
  }

  if (a === "mocha") {
    para.innerHTML = "You haven't the skillz to make a mocha yet!<br /> Learn how to brew better, bro."
  }

  if (a ==="latte") {
    para.innerHTML = "You need a LATTE more skillz to make a LATTE!<br /> Learn how to brew better, Bro (GET IT?!)"
  }

}

// Brew Regular Coffee
function regularBrew(a) {
  let pour = document.getElementById("brewPour");
  let drink = document.getElementById("brewDrink");
  let para = document.getElementById("responsePara");
  let countdown = document.getElementById("countdown");
  let pourTimer = 2;
  let pourRate = 1000;
  
  if (a === "pour") {

    para.innerHTML = " ";
    countdown.innerHTML = " ";

    para.innerHTML = "Pouring...";
    countdown.innerHTML = pourTimer;

    pour.classList.remove("shown");
    pour.classList.add("hidden");
    
    // Brew Countdown
    let pourInterval = setInterval(function() {
        
        // timer countdown
        if (pourTimer > 0) {
          pourTimer--;
          countdown.innerHTML = pourTimer;
          console.log(pourTimer);
        }

        // when the brew timer ends
        if (pourTimer === 0) {
          para.innerHTML = "DONE POURING<br /><br /><img src='img/coffee-cup.png' width='10%' height='10%' />";
          countdown.innerHTML = null;
          clearInterval(pourInterval); // stops the timer

          drink.classList.remove("hidden");
          drink.classList.add("shown");
        }

       // timer interval
    }, pourRate); 
  }

  if (a === "drink") {

    para.innerHTML = "Ahhh...nothing like a cup of joe.<br /><br />Congratulations! You are a level 2 Barista!<br /><br />You may now brew espressos."

    drink.classList.remove("shown");
    drink.classList.add("hidden");

    level = 2;

  }

}
