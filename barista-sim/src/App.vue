<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Matthew Renfer</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <router-link to="/">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#ECE0D1">mdi-home-city</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
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

<router-link to="/clock-in">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#ECE0D1">mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Clock In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>


      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>


      <v-toolbar-title>
        <Header :currentLevel="currentLevel" />
      </v-toolbar-title>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      currentLevel: 1,
      drawer: true,
      mini: true,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

.fadeIn-enter-active,
.pot-leave-active {
  transition: opacity 2.5s;
}
.fadeIn-enter, .pot-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Router STyles */

#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #f2f2f2;
    }
  }
}
</style>
