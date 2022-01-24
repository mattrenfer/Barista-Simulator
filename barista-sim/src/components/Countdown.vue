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
      count: this.countAmount,
      timer: null,
    };
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    startTimer() {
      this.timer = setInterval(
        () => (this.count > 1 ? (this.count -= 1) : this.clearTimer()),
        1000
      );
    },
    clearTimer() {
      clearInterval(this.timer);
      this.$emit('isTimerDone', true)
    },
  },
};
</script>

<style lang="scss" scoped></style>
