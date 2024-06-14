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
    hi from remote{{ year }}
    <router-view />

  </div>
</template>
