<template>
    <div class="settings">
      <h2>Coffee Shop...Shop</h2>
      <br /><br />
      <button @click="buyCarafe"><h3>Buy a better carafe (makes 2 more cups): {{ convertedCarafePrice }}</h3></button>
      
      <br />
    </div>
</template>

<script>
    export default {
        name: "Shop",
        methods: {
            buyCarafe() {
                if (this.currentTips >= this.carafePrice) {
                    this.$store.commit("buyCarafe");
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
              return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.$store.state.carafePrice);
            },
            currentTips(){
              return this.$store.state.currentTips;
            },
        },
    };

</script>

<style lang="scss" scoped>

</style>