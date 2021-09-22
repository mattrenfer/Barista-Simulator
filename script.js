var makeTheCoffee;

// Start the program & ask to make some coffee
function startBaristaSim () {
    let para = document.getElementById("responsePara");
    let startAnswer = window.prompt("Wanna make some coffee?");
    if (startAnswer === "Yes" || startAnswer === "yes") {
      para.innerHTML = "Let's get started!";
    }
    else {
      para.innerHTML = "Nah? That's cool...";
    }
}


// What do you do first?
function askToMakeCoffee(makeTheCoffee) {
  
}