<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavMenu",
});
</script>

<template>
  <div class="menu"></div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.menu {
  width: 100%;
}
</style>
