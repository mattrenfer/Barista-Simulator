<template>
  <div class="brew">
    <div v-show="!showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="!brewDone">
          Brewing . . .<Countdown :countAmount="5" @isTimerDone="isBrewDone" />
        </p>
        <p v-else>DONE BREWING</p>
        <img src="@/assets/imgs/coffee-pot.png" width="30%" height="30%" />
      </div>
      <div class="selection" v-show="brewDone">
        <button class="uiButtons" @click="showDrinkCoffee = true">
          Pour coffee!
        </button>
      </div>
    </div>

    <div v-if="showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="showDrankCoffee">
          Congratulations! You are a level {{ level }} Barista!
        </p>
        <p v-if="!drinkDone">
          Pouring . . .<Countdown :countAmount="3" @isTimerDone="isDrinkDone" />
        </p>
        <p v-else>DONE POURING</p>
        <img src="@/assets/imgs/coffee-cup.png" width="15%" height="15%" />
      </div>
      <!-- <div class="selection" v-show="drinkDone">
        <button class="uiButtons" @click="levelUp()">Drink coffee!</button>
      </div>
      <div class="selection" v-show="showDrankCoffee">
        <button class="uiButtons" @click="resetIt()">
          Let's brew some more!
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

export default {
  name: "BrewTimers",
  components: {
    Countdown,
  },
  props: {
    selectedCoffee: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      showDrinkCoffee: false,
      showDrankCoffee: false,
      brewDone: false, // essentially pagination hide/shows that trigger to true when the timer is finished via the timerIsDone emit trigger (in Countdown.vue)
      drinkDone: false,
    };
  },

  computed: {
    level() {
      return this.$store.state.currentLevel;
    },
  },

  methods: {
    isBrewDone(timerDone) {
      this.brewDone = timerDone;
    },
    isDrinkDone(timerDone) {
      this.drinkDone = timerDone;
      this.$store.commit("currentDrink", this.selectedCoffee);
      console.log(this.$store.state.currentDrink);
    },
    levelUp() {
      this.showDrankCoffee = true;
      this.$store.commit("levelUp");
      console.log(this.$store.state.currentLevel);
    },
    resetIt() {
      this.$emit("resetIt", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
