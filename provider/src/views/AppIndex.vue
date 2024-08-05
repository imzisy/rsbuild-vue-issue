<script>
export default {
  name: "AppIndex",
  computed: {
    userData() {
      console.log(this.$store.state.userData);
      return this.$store.state.userData;
    },
    initialLoaded() {
      return this.$store.state.initialLoaded;
    },
  },
  mounted() {
    this.$store
      .dispatch("getUserData")
      .catch((err) => {
        console.log(err);
      })
      .then((message) => {
        console.log(message)
      });
  },

};
</script>
<template>
  <div class="bg-blue-400">
    bg-blue-400
    Hello from App index {{ userData }}
  </div>
  <slot></slot>
</template>
