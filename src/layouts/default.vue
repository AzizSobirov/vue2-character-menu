<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import TheHeader from "./components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";

export default Vue.extend({
  components: {
    TheHeader,
    TheSidebar,
  },
  computed: {
    ...mapState(["background"]),
    contentStyles(): { backgroundImage: string } {
      return {
        backgroundImage: `url(${(this as any).background})`,
      };
    },
  },
});
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <TheSidebar />

    <!-- Main -->
    <main>
      <!-- Header -->
      <TheHeader />

      <!-- Slot -->
      <div class="content" :style="contentStyles">
        <router-view />
      </div>
    </main>
  </div>
</template>
 
<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.layout {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;

  & > main {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .content {
    position: relative;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: auto;
  }
}
</style>
