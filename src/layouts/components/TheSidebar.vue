<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheSidebar",
});
</script>

<template>
  <div class="sidebar">Sidebar</div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.sidebar {
  position: relative;
  min-width: rem(256);
  width: rem(256);
  height: 100%;
}
</style>
