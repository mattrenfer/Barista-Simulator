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
