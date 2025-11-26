<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader",
});
</script>

<template>
  <div class="header">Header</div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  position: relative;
  min-width: rem(256);
  width: rem(256);
  height: rem(80);
}
</style>
