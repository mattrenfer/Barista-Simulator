<template>
  <transition name="fadeIn" appear>
    <div class="home">
      <h3>Welcome to Barista Simulator!</h3>
      <br />
      <p><strong>Clock</strong> in to start taking customer orders!</p>

      <p><strong>Brew</strong> to make your hot drinks to serve customers (or refuse the rude ones)!</p>

      <p>Your Barista <strong>level</strong> determines what drinks you can make.</p>

      <p>
        You can also drink your brewed drinks, giving you a caffine boost! Your
        caffine level determines how fast you brew drinks.
      </p>
      <p>Earn cash through your tips and crappy minimum wage to...live life outside of your barista job...and stuff.</p>
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

p {
  font-family: "Courier New", Courier, monospace !important;
}
</style>
