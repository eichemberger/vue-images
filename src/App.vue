<template>
  <div>
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: { AppHeader },
};
</script>

<style></style>
