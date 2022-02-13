<template>
<v-app>
  <div class="nav-button-left">
      <router-link to="/orders">
          <span class="nav-button-text">Orders</span><br />
          <v-icon class="nav-arrow" dark> mdi-arrow-left-thick </v-icon>
      </router-link>
    </div>
    <div class="nav-button-right">
      <router-link to="/brew">
          <span class="nav-button-text">Orders</span><br />
          <v-icon class="nav-arrow" dark> mdi-arrow-right-thick </v-icon>
      </router-link>
    </div>
  <div class="brew">
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

#app {
  background-image: url(../assets/imgs/beans-after-1.png) !important;
  background-size: auto;
  background-repeat: repeat-y;
  background-position-x: right;
}

#main { 
  margin-top: 75px;
  margin-bottom: 75px;
}

#coffeeSelection {
  margin-top: 50px;
  margin-bottom: 50px;
}


/* Left & Right Nav Buttons */

.v-icon.v-icon.nav-arrow {
  font-size: 25px !important;
}

.nav-button-left, .nav-button-right {
  position: absolute;
  top: 50%;
}

.nav-button-right {
  right: 0;
}

.nav-button-text {
  display: none;
}

.nav-button-text:hover {
  display:inline;
}


</style>
