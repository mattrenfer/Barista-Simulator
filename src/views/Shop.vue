<template>
<v-container>
   <h1 class="viewTitle">Shop</h1>
  <v-row justify="space-around">
  <v-col>
    <v-sheet color="#37251b" elevation="24" rounded height="265"><h2>Upgrade Carafe</h2><br /><p>Makes 2 more cups per upgrade.<br />Currently makes {{ currentCarafe }} cups per brew. </p><br /><h3> {{ convertedCarafePrice }}</h3><button @click="buyCarafe"><h3>Buy </h3></button></v-sheet>
  </v-col>
  <v-col>
    <v-sheet v-if="!chalkBoard" color="#37251b" elevation="24" rounded height="265"><h2>Double-sided chalkboard stand</h2><br /><p>Attracts big tip tourists.</p><br /><h3> {{ convertedChalkBoardPrice }}</h3><button @click="buyChalkBoard"><h3>Buy</h3></button></v-sheet>

  </v-col>
  </v-row>
</v-container>
</template>

<script>

import { dollarAmount } from "@/shared/constants";

    export default {
        name: "Shop",
        data() {
          return {
            chalkBoardPrice: 5,
          }
        },
        methods: {
            buyCarafe() {
                if (this.currentTips >= this.carafePrice) {
                    this.$store.commit("buyCarafe");
                }
                else {
                    console.log("Not Enough Tips!");
                }
            },
            buyChalkBoard() {
                if (this.currentTips >= this.chalkBoardPrice) {
                    this.$store.commit("buyChalkBoard", this.chalkBoardPrice);
                }
                else {
                    console.log("Not Enough Tips!");
                }
            },
        },
        computed: {
            carafePrice() {
              return this.$store.state.carafePrice;
            },
            convertedCarafePrice(){
              return dollarAmount(this.$store.state.carafePrice);
            },
            convertedChalkBoardPrice(){
              return dollarAmount(this.chalkBoardPrice);
            },
            chalkBoard() {
              return this.$store.state.chalkBoard;
            },
            currentTips(){
              return this.$store.state.currentTips;
            },
            currentCarafe() {
              return this.$store.state.currentCarafe;
            },
        },
    };

</script>

<style lang="scss" scoped>

.v-sheet {
  padding: 25px;
}

</style>