<template>
<v-app>
  <div class="text-center">
    <router-link to="/orders">
      <v-btn
        fab
        dark
        color="black"
      >Orders<br />
        <v-icon class="nav-arrow" dark>
          mdi-arrow-up-thick 
        </v-icon>
        
      </v-btn>
    </router-link>
  </div>
  <div class="brew">
    <h1 class="viewTitle">Brew</h1>
    <h2>
      Cups available: {{ cups }}<br />
    </h2>

    <div id="main">
      <BrewCarafe />

    </div>
  </div>
</v-app>
</template>

<script>

import BrewCarafe from "@/components/BrewCarafe.vue";


export default {
  name: "Brew",
  components: {
    BrewCarafe,
  },
  data() {
    return {
      currentLevel: this.$store.state.currentLevel,
      msg: ""
    };
  },

  
  computed: {
    level() {
      return this.$store.state.currentLevel;
    },
    cups(){
      return this.$store.state.currentCups;
    },
    currentDrink(){
      return this.$store.state.currentDrink;
    }
  },
};
</script>

<style scoped>

#brew {
  background-image: url(../assets/imgs/beans-after-1.png) !important;
}

#main { 
  margin-top: 75px;
  margin-bottom: 75px;
}

#coffeeSelection {
  margin-top: 50px;
  margin-bottom: 50px;
}


</style>
