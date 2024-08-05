<script>
import AppIndex from "@remote/auth/AppIndex";

export default {
  name: "HostIndex",
  components: {
    AppIndex,
  },
  setup() { },
};
</script>

<template>

  <AppIndex>
    hello
    <router-view />
  </AppIndex>
</template>
