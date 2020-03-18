<template>
  <div id="app">
    <pm-header />
    <router-view></router-view>
    <PmFooter />
  </div>
</template>

<script>
import PmFooter from "./components/layout/footer.vue";
import PmHeader from "./components/layout/header.vue";

export default {
  name: "App",
  components: {
    
    PmFooter,
    PmHeader,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
