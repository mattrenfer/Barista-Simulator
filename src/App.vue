<template>
  <v-app>
    <v-navigation-drawer
      mini-variant-width="65"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="./assets/imgs/coffee-icon.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#ECE0D1">mdi-sofa-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/clock-in">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#ECE0D1">mdi-clock-time-five-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Clock In</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/brew">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#ECE0D1">mdi-coffee-maker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Brew</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/orders">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#ECE0D1">mdi-message-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Orders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>


         <router-link to="/shop" v-if="this.$store.state.currentTips">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#ECE0D1">mdi-currency-usd</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Shop</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <Header />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-system-bar color="#37251b" lights-out>
      <v-spacer></v-spacer>

      Version {{ versionNumber }}
      &nbsp;<router-link to="/settings"><v-icon class="icon-small">mdi-cog-outline</v-icon></router-link>
    </v-system-bar>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import { version } from '../package.json';

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      versionNumber: version,
      drawer: true,
      mini: true,
    };
  },
  computed: {
    currentTips() {
      return this.$store.state.currentTips;
    },
  },
};
</script>

<style>
#app {
  background-color: #172331;
  background-image: url(assets/imgs/beans-after-1.png);
  background-size: auto;
  background-repeat: repeat-y;
  background-position-x: right;
  color: #f2f2f2;
  font-size: 20px;
  font-family: monospace;
  text-align: center;
}

.v-navigation-drawer {
  background-color: #37251b !important;
}

.v-app-bar {
  background-color: #37251b !important;
  height: auto !important;
}

.v-main {
  margin-top: 30px;
}

.v-system-bar {
  height: 30px !important;
}

.v-list-item__title {
  font-size: 1.5rem !important;
  line-height: 1.2 !important;
}

.v-list-item__icon {
  height: 50px !important;
}

.v-icon.v-icon {
  font-size: 35px !important;
}

.v-icon.v-icon.icon-small {
  font-size: 22px !important;
}

.v-toolbar__content {
  display: block !important;
  height: auto !important;
}

.v-application a {
  color: #ece0d1 !important;
}

.v-application a:hover {
  color: #f2f2f2 !important;
}

.header {
  margin-top: 0px !important;
}

h1 {
  text-align: center;
  color: #d2c1b0;
  text-shadow: 3px 3px 1px #000;
}

h2 {
  text-align: center;
  color: #ece0d1;
}

h3 {
  text-align: center;
}

p {
  color: #ece0d1;
}

a,
a:visited,
a:active {
  color: #ece0d1;
  text-decoration: none;
}

a:hover {
  color: #f2f2f2;
}

.viewTitle {
  margin-bottom: 50px;
}

.starting-buttons {
  background-color: #967259;
  padding: 10px;
  border: 1px solid #f2f2f2;
  text-align: center;
  justify-content: space-evenly;
  margin-bottom: 100px;
}

.descriptiveText {
  text-align: center;
  color: #ece0d1;
}

.countdown {
  text-align: center;
  color: #ece0d1;
}

.selection {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ece0d1;
  width: 100%;
  margin: auto;
  margin-top: 10px;
}

.verticalButtons {
  flex-direction: column;
  justify-content: space-between;
  color: #ece0d1;
  width: 100%;
  margin: auto;
  margin-top: 10px;
}

.locked {
  opacity: 0.6;
}

button {
  color: #ece0d1 !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  background-color: #967259 !important;
  padding: 15px !important;
  border: 1px solid #f2f2f2 !important;
  width: 20% !important;
  margin: auto !important;
  cursor: pointer !important;
}

.hidden {
  display: none;
}

.shown {
  display: flex;
}

/* Animation Styles */

.fadeIn-enter-active {
  transition: opacity 2.5s;
}
.fadeIn-enter /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
