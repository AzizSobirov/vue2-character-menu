<script lang="ts">
import Vue from "vue";
import NavMenu from "./NavMenu.vue";
import Profile from "./Profile.vue";

export default Vue.extend({
  name: "TheSidebar",
  components: {
    Profile,
    NavMenu,
  },
});
</script>

<template>
  <div class="sidebar">
    <!-- Profile -->
    <Profile />
    <!-- Menu -->
    <NavMenu />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.sidebar {
  position: relative;
  min-width: rem(256);
  width: rem(256);
  height: 100%;
  background: linear-gradient(315deg, #131720 0%, #10131b 100%);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
