<script>
export default {
  name: "App",
};
</script>
<template>
  <div :class="$style.view">
    Hi from consumer test
    <div :class="$style.main">
      <router-view />
    </div>
  </div>
</template>

<style module scoped>
.view {
  @apply min-h-screen overflow-hidden bg-gray-100 print:!overflow-visible print:invisible print:h-full;
}
.gridView {
  @apply grid grid-cols-1 gap-4 md:grid-cols-3;
}
.main {
  @apply m-auto;
}
</style>
