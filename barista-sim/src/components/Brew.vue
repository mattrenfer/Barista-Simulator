<template>
  <div class="brew">
    <div v-show="!showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="!brewDone">
          Brewing . . .<Countdown :countAmount="5" v-on:isTimerDone="brewDone = $event" />
        </p>
        <p v-else>
          DONE BREWING
        </p>
        <img src="@/assets/imgs/coffee-pot.png" width="30%" height="30%" />
      </div>
      <div class="selection" v-show="brewDone">
        <button class="uiButtons" @click="showDrinkCoffee = true">Pour coffee!</button>
      </div>
    </div>

    <div v-if="showDrinkCoffee">
      <div class="descriptiveText">
        <p v-if="showDrankCoffee">
          Congratulations! You are a level 2 Barista!
        </p>
        <p v-if="!drinkDone">
          Pouring . . .<Countdown :countAmount="3" v-on:isTimerDone="drinkDone = $event" />
        </p>
        <p v-else>
          DONE POURING
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

import Countdown from '@/components/Countdown.vue';

export default {
  name: "Brew",
  components: {
    Countdown,
  },
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
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
