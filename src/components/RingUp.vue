<template>
  <div class="pour">
    <div>
      <div class="descriptiveText">      
        <p v-if="!drinkDone">
          Authorizing Purchase . . .<Countdown :countAmount="2" @isTimerDone="isDrinkDone" /><br /><br />
          <v-icon>mdi-credit-card-clock-outline</v-icon>
        </p>
        <p v-else>Purchase Complete</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

export default {
  name: "RingUp",
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

.v-icon.v-icon {
  font-size: 100px !important;
}

</style>
