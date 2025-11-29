<template>
  <div class="character-layout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.character-layout {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > section {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
