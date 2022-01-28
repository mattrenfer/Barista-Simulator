<template>
  <transition name="fadeIn" appear>
    <div class="home">
      <h2>Welcome to Barista Simulator</h2>
      <br /><br />
      <h3>How to Play</h3>
      <p><strong>Clock In</strong> to start taking customer <strong>Orders</strong>!</p>

      <p><strong>Brew</strong> to make your hot drinks to serve customers (or refuse the rude ones)!</p>

      <p>Your Barista <strong>level</strong> determines what drinks you can make.</p>

      <!-- <p>
        You can also drink your brewed drinks, giving you a caffine boost! Your
        caffine level determines how fast you brew drinks.
      </p> -->
      <p>Earn cash through your <strong>tips</strong> and crappy minimum wage to have a life outside of your barista job and stuff.</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  max-width: 90%;
  margin: auto;
}


h2 {
  font-size: 36px !important;
}

p {
  font-family: "Courier New", Courier, monospace !important;
  font-size: 26px !important;
}
</style>
