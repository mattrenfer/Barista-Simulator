<template>
<v-app>
  <transition name="fadeIn" appear>
    <div class="home">
      <h2><router-link to="/">Barista Simulator</router-link><br /> (Version {{ versionNumber }})</h2>
      <br />
      <h3>How to Play</h3>
      <p>&bull; <strong>Clock In</strong> to start taking customer orders</p>
      <p>&bull; <strong>Brew</strong> your hot drinks to serve customers</p>
      <p>&bull; Earn <strong>tips</strong> to purchase upgrades</p><br />
      <br />
      <router-link to="/orders"><button @click="play">Start</button></router-link><br />
      <router-link to="/settings"><button>Settings</button></router-link><br />

    </div>
    
  </transition>
</v-app>
</template>

<script>

import useSound from 'vue-use-sound'
import coffeeAmbiance from '@/assets/sound/morning-murmur.mp3'
import { version } from '../../package.json';

export default {
  name: "Home",
  data() {
    return {
      versionNumber: version
    }
  },
  
  setup() {
    const [play] = useSound(coffeeAmbiance, {volume: 0.05})

    return {
      play,
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


.home {
  max-width: 75%;
  margin: auto;
  margin-top: 25px;
}


h2 {
  font-size: 36px !important;
  margin-bottom: 50px !important;
}

h3 {
  font-size: 30px !important;
  margin-bottom: 25px !important;
}

p {
  font-family: "Courier New", Courier, monospace !important;
  font-size: 26px !important;
}
</style>
