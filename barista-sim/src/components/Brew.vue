<template>
  <div class="brew">
    <div v-show="!showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="!brewDone">
          Brewing . . .<Countdown
            :countAmount="5"
            v-on:isTimerDone="brewDone = $event"
          />
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
          Congratulations! You are a level {{ currentLevel }} Barista!
        </p>
        <p v-if="!drinkDone">
          Pouring . . .<Countdown
            :countAmount="3"
            v-on:isTimerDone="drinkDone = $event"
          />
        </p>
        <p v-else>DONE POURING</p>
        <img src="@/assets/imgs/coffee-cup.png" width="15%" height="15%" />
      </div>
      <div class="selection" v-show="drinkDone">
        <button class="uiButtons" @click="levelUp()">Drink coffee!</button>
      </div>
      <div class="selection" v-show="showDrankCoffee">
        <button class="uiButtons" @click="resetIt()">
          Let's brew some more!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

export default {
  name: "Brew",
  components: {
    Countdown,
  },
  props: {
    currentLevel: {
      type: Number,
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
  methods: {
    levelUp() {
      this.showDrankCoffee = true;
      this.$emit("levelUp", (this.currentLevel += 1)); // send up the currentLevel + 1 to the parent (BrewChoice.vue)
    },
    resetIt() {
      this.$emit("resetIt", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
