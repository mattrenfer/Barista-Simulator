<template>
  <span>
    {{ count }}
  </span>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    countAmount: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      count: this.countAmount, // takes the countAmount prop passed to this component render
      timer: null,
    };
  },

  mounted() {
    this.startTimer(); // start the timer automatically when the component is mounted (in this case, a v-if. v-show will NOT work, since it's already in the DOM on page load)
  },

  methods: {
    startTimer() {
      this.timer = setInterval(
        () => (this.count > 1 ? (this.count -= 1) : this.clearTimer()), // if count is greater than 1, keep running down like a timer. if not, run the clear trigger
        1000
      );
    },
    clearTimer() {
      clearInterval(this.timer);
      this.$emit("isTimerDone", true); // stops the timer at zero and passes up a value saying it's done to the parent (Brew.vue)
    },
  },
};
</script>

<style lang="scss" scoped></style>
