<template>
  <div class="brew">
    <div v-show="!drinkCoffee">
      <div class="descriptiveText">
        <p>Brewing . . .</p>
        <img src="@/assets/imgs/coffee-pot.png" width="30%" height="30%" />
      </div>
      <div class="selection">
        <button class="uiButtons" @click="drinkCoffee = true">
          Pour coffee!
        </button>
      </div>
    </div>

    <div v-show="drinkCoffee">
      <div class="descriptiveText">
        <p v-if="drankCoffee">Congratulations! You are a level 2 Barista!</p>
        <p v-else>Brewing . . .</p>
        <img src="@/assets/imgs/coffee-cup.png" width="15%" height="15%" />
      </div>
      <div class="selection">
        <button class="uiButtons" @click="drankCoffee = true">
          Drink coffee!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brew",
  data() {
    return {
      drinkCoffee: false,
      drankCoffee: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
