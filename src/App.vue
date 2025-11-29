<template>
  <div id="app" ref="app" class="app">
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
      const baseHeight = 1080; // 1080p
      const calculatedSize = (this.fontSize / baseHeight) * window.innerHeight;
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
