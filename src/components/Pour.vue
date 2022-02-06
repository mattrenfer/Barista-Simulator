<template>
  <div class="pour">
    <div>
      <div class="descriptiveText">      
        <p v-if="!drinkDone">
          Pouring . . .<Countdown :countAmount="3" @isTimerDone="isDrinkDone" /><br /><br />
          <img src="@/assets/imgs/coffee-cup.png" width="15%" height="15%" />
        </p>
        <p v-else>DONE POURING {{ currentDrink }}</p>
        
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
  name: "Pour",
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
      drinkDone: false,
    };
  },

  computed: {
    currentDrink(){
      return this.$store.state.currentDrink;
    }
  },

  methods: {
    isDrinkDone(timerDone) {
      this.drinkDone = timerDone;
      this.$store.commit("pourCoffee");
      this.$store.commit("currentDrink", this.selectedCoffee);
    },
    levelUp() {
      this.$store.commit("levelUp");
      console.log(this.$store.state.currentLevel);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pour {
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>
