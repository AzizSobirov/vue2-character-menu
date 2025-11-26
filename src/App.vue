<template>
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      fontSize: 16,
    };
  },
  methods: {
    updateFontSize() {
      const calculatedSize = (this.fontSize / 1080) * window.innerHeight;
      if (this.$refs.app) {
        (this.$refs.app as HTMLElement).style.fontSize = `${calculatedSize}px`;
      }
    },
  },
  mounted() {
    this.updateFontSize();
    window.addEventListener("resize", this.updateFontSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateFontSize);
  },
});
</script>
