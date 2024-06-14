<script>
export default {
  name: "App",
  data() {
    return {
      year: new Date().getFullYear(),
      dropdownVisible: false,
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {},
};
</script>
<template>
  <div>
    hi from provider
    <router-view />
  </div>
</template>
