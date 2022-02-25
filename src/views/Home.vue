<template>
<v-app>
  <transition name="fadeIn" appear>
    <div class="home">
      <h2>Welcome to Barista Simulator<br /> (Version {{ versionNumber }})</h2>
      <br />
      <h3>How to Play</h3>
      <p><strong><router-link to="/clock-in">Clock In</router-link></strong> to start taking customer <strong><router-link to="/orders">Orders</router-link></strong>!</p>

      <p><strong><router-link to="/brew">Brew</router-link></strong> to make your hot drinks to serve customers (or refuse the rude ones)!</p>

      <p>Your Barista <strong>level</strong> determines what drinks you can make.</p>

      <!-- <p>
        You can also drink your brewed drinks, giving you a caffine boost! Your
        caffine level determines how fast you brew drinks.
      </p> -->
      <p>Earn cash through your <strong>tips</strong> and crappy minimum wage to have a life outside of your barista job and stuff.</p><br />
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
  max-width: 50%;
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
