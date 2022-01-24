<template>
  <div class="brew">
    <div v-show="!showDrinkCoffee">
      <div class="descriptiveText">
        <p>
          Brewing . . .
          <span class="base-timer__label">{{ timeLeftBrew }}</span>
        </p>
        <img src="@/assets/imgs/coffee-pot.png" width="30%" height="30%" />
      </div>
      <div class="selection" v-show="brewDone">
        <button class="uiButtons" @click="drinkCoffee()">Pour coffee!</button>
      </div>
    </div>

    <div v-show="showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="showDrankCoffee">
          Congratulations! You are a level 2 Barista!
        </p>
        <p v-else>
          Brewing . . .
          <span class="base-timer__label">{{ timeLeftDrink }}</span>
        </p>
        <img src="@/assets/imgs/coffee-cup.png" width="15%" height="15%" />
      </div>
      <div class="selection" v-show="drinkDone">
        <button class="uiButtons" @click="showDrankCoffee = true">
          Drink coffee!
        </button>
      </div>
    </div>
  </div>
</template>

<script>

const BREW_TIME_LIMIT = 5;
const DRINK_TIME_LIMIT = 3;

export default {
  name: "Brew",
  props: {
    timeToBrewCoffee: {
      type: Boolean,
      default: () => false,
    }
  },
  data() {
    return {
      showDrinkCoffee: false,
      showDrankCoffee: false,
      brewDone: false,
      drinkDone: false,
      timePassedBrew: 0,
      timePassedDrink: 0,
      timerIntervalBrew: null,
      timerIntervalDrink: null,
    };
  },

  computed: {
    // formattedTimeLeft() {
    //   const timeLeft = this.timeLeft;
    //   return timeLeft;
    // },

    timeLeftBrew() {
      return BREW_TIME_LIMIT - this.timePassedBrew;
    },

    timeLeftDrink() {
      return DRINK_TIME_LIMIT - this.timePassedDrink;
    },
  },

  watch: {
    timeLeftBrew(newValue) {
      if (newValue === 0) {
        this.onTimesUpBrew();
      }
    },
    timeLeftDrink(newValue) {
      if (newValue === 0) {
        this.onTimesUpDrink();
      }
    },
  },

  mounted() {
    this.startBrewTimer();
  },

  methods: {
    onTimesUpBrew() {
      clearInterval(this.timerIntervalBrew);
      this.brewDone = true;
    },
    onTimesUpDrink() {
      clearInterval(this.timerIntervalDrink);
      this.drinkDone = true;
    },
    startBrewTimer() {
      this.timerIntervalBrew = setInterval(() => (this.timePassedBrew += 1), 1000);
    },
    startDrinkTimer() {
      this.timerIntervalDrink = setInterval(() => (this.timePassedDrink += 1), 1000);
    },
    drinkCoffee(){
    this.startDrinkTimer();
    this.showDrinkCoffee = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
