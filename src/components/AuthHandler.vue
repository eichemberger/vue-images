<template>
  <div>Loading...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: {
    ...mapActions(["finalizeLogin"]),
  },
  created() {
    const token = window.location.hash;
    this.finalizeLogin(token);
  },
};
</script>
