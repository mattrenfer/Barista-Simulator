<template>
<div class="brew">
  <div v-show="!drinkCoffee">
    <div class="descriptiveText">
      <p>Brewing . . .</p>
        <img src="@/assets/imgs/coffee-pot.png" width='30%' height='30%' class="fade-in-image" />
    </div>
    <div class="selection">
      <button class="uiButtons" @click="drinkCoffee = true">Pour coffee!</button>
    </div>
  </div>

  <div v-show="drinkCoffee">
    <div class="descriptiveText">
      <p v-if="drankCoffee">Congratulations! You are a level 2 Barista!</p>
      <p v-else>Brewing . . .</p>
      <img src="@/assets/imgs/coffee-cup.png" width='15%' height='15%' class="fade-in-image" />
    </div>
    <div class="selection">
      <button class="uiButtons" @click="drankCoffee = true">Drink coffee!</button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Brew',
  data() {
    return {
       drinkCoffee: false,
       drankCoffee: false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

</style>
