<script lang="ts">
import Vue from "vue";
import { XIcon } from "@/components/icons";

export default Vue.extend({
  name: "TheHeader",
  components: {
    XIcon,
  },
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
    <!-- <span @click="fullScreenToggle">full screen</span> -->

    <div class="wrapper">
      <div class="balance">
        <span> {{ $store.state.profile.uc }} </span>
        <img src="@/assets/img/uc.png" alt="" />
      </div>

      <div class="seperator"></div>

      <button class="deposit">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1C10 0.447715 9.55229 0 9 0C8.44772 0 8 0.447715 8 1V8H1C0.447715 8 0 8.44771 0 9C0 9.55228 0.447715 10 1 10H8V17C8 17.5523 8.44772 18 9 18C9.55229 18 10 17.5523 10 17V10H17C17.5523 10 18 9.55229 18 9C18 8.44772 17.5523 8 17 8H10V1Z"
            fill="currentColor"
          />
        </svg>

        <span>Пополнить</span>
      </button>

      <div class="seperator"></div>

      <div class="language">
        <img src="@/assets/img/ru.png" alt="" />
      </div>

      <div class="seperator"></div>

      <button class="close">
        <XIcon />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  position: relative;
  padding: 0 rem(36);
  width: 100%;
  height: rem(84);
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: rem(12);
}

.balance {
  display: flex;
  align-items: center;
  gap: rem(4);

  span {
    font-size: rem(12);
    font-weight: 500;
  }

  img {
    width: rem(24);
    height: rem(24);
  }
}

.seperator {
  width: rem(1);
  height: rem(16);
  background-color: var(--border);
}

.deposit {
  padding: 0 rem(16);
  height: rem(36);
  color: var(--green);
  border: rem(1) solid var(--green);
  border-radius: rem(8);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(8);
  cursor: pointer;
  transition: color, background var(--transition-ease);

  &:hover {
    color: var(--background);
    background: var(--green);

    span {
      color: var(--background);
    }
  }

  svg {
    width: rem(16);
    height: rem(16);
  }

  span {
    color: #fff;
    font-size: rem(12);
    font-weight: 500;
    transition: color, background var(--transition-ease);
  }
}

.language img {
  width: rem(24);
  height: rem(16);
}

.close {
  padding: rem(10);
  width: rem(36);
  height: rem(36);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-white-50);
  border-radius: rem(8);
  border: rem(1) solid var(--border);
  transition: background var(--transition-ease);

  &:hover {
    color: #fff;
    background: var(--border);
  }
}
</style>
