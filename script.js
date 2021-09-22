// Start the program & ask to make some coffee
function startBaristaSim () {
    let para = document.getElementById("responsePara");
    para.innerHTML = "Wanna make some coffee?";

    /*if (startAnswer === "Yes" || startAnswer === "yes") {
      para.innerHTML = "Which coffee shall we brew?";
      coffeeSelection();
    }
    else {
      para.innerHTML = "Nah? That's cool...";
    }
    */
}

// Coffee to Brew
function coffeeSelection() {
  let choices = document.getElementById("coffeeChoices");
  choices.innerHTML = "<h3 onclick='regular();'><a href='#'>Regular</a></h3><h3>Espresso</h3><h3>Mocha</h3>";
}


// Regular Coffee
function regular() {
  let para = document.getElementById("responsePara");
  para.innerHTML = "Let's make some regular coffee";
}