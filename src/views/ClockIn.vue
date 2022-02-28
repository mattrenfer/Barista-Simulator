<template>
  <div class="clock-in">
    <h1 class="viewTitle">Clock In</h1>
    <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
      <button @click="clockIn()">Clock In</button>
    </div>
    <div class="descriptiveText" v-if="this.$store.state.clockedIn">
      <p>CLOCKED IN ON {{ clockedInDate }}<br /> AT {{ clockedInTime }}</p>
      <br /><br />
      <button @click="clockOut()">Clock Out</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ClockIn",
  computed: {
    clockedInDate() {
      return this.$store.state.clockedInDate;
    },
    clockedInTime() {
      return this.$store.state.clockedInTime;
    },
  },

  methods: {
    clockIn() {
      this.$store.commit("clockedInDate", this.printDate());
      this.$store.commit("clockedInTime", this.printTime());
      this.$store.commit("clockedIn", true);
    },
    clockOut() {
      //this.$store.commit("clockedInDate", this.printDate());   // needs clock out time
      //this.$store.commit("clockedInTime", this.printTime());   // needs clock out time
      
      this.$store.commit("clockedIn", false);
      this.$store.commit("currentCustomer", '');
    },
    
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
  },
};
</script>

<style lang="scss" scoped>

/* Animation Styles */

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 4.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
