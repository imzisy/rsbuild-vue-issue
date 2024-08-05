<script>
export default {
  name: "App",
};
</script>
<template>
  <div>
    Hi from consumer test
    <div>
      <router-view />
    </div>
  </div>
</template>

<style module scoped>

.gridView {
  @apply grid grid-cols-1 gap-4 md:grid-cols-3;
}

.main {
  @apply m-auto bg-red-400;
}
</style>
