<template>
  <div class="brew">
    <button class="uiButtons" @click="brewDone = false">Brew carafe! (makes {{ currentCarafe }} cups)</button>
     <div class="descriptiveText">
        <p v-if="!brewDone">
          Brewing . . .<Countdown :countAmount="5" @isTimerDone="isBrewDone" /><br /><br />
          <img src="@/assets/imgs/coffee-pot.png" width="30%" height="30%" />
        </p>
        
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

export default {
  name: "BrewCarafe",
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
      brewDone: true,
    };
  },


  methods: {
    isBrewDone(timerDone) {
      this.brewDone = timerDone;
      this.$store.commit("brewCoffee");
    },
  },
  computed: {
    currentCarafe() {
      return this.$store.state.currentCarafe;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.brew {
  margin-top: 25px;
  margin-bottom: 25px;
}

.descriptiveText {
  margin-top: 25px;
}

</style>
