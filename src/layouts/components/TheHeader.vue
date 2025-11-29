<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader",
  methods: {
    fullScreenToggle() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
  },
});
</script>

<template>
  <div class="header">
    <span @click="fullScreenToggle">Header</span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  position: relative;
  min-width: rem(256);
  width: rem(256);
  height: rem(84);
}
</style>
