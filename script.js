

var makeTheCoffee;

// Start the program
function startCoffeeSim () {
    let startAnswer = window.prompt("Start?");
    if (startAnswer === "Yes" || "yes") {
      askToMakeCoffee();
    }
}

startCoffeeSim();


// Will you make the coffee?
function askToMakeCoffee(makeTheCoffee) {
  document.write('Wanna make some coffee?');
}
