<script lang="ts">
import Vue from "vue";
import type { Profile } from "@/types/profile";
import { Card, Cash } from "@/components/icons";

export default Vue.extend({
  name: "TheSidebar",
  components: {
    Card,
    Cash,
  },
  computed: {
    profile(): Profile {
      return this.$store.state.profile;
    },
  },
});
</script>

<template>
  <div class="sidebar">
    <!-- Profile -->
    <div class="profile">
      <div class="profile__info">
        <div class="profile__avatar">
          <img :src="profile.avatar" alt="" />
          <div class="profile__avatar-level">
            <span>{{ profile.level }}</span>
          </div>
        </div>

        <div class="profile__id">
          <span>#{{ profile.id }}</span>
        </div>

        <div class="profile__name">
          <span>{{ profile.name }}</span>
        </div>
      </div>

      <div class="profile__balance">
        <div class="profile__balance-item">
          <Cash />
          <span>{{ profile.balance.cash }} ₽</span>
        </div>
        <div class="profile__balance-item">
          <Card />
          <span>{{ profile.balance.card }} ₽</span>
        </div>
      </div>
    </div>

    <!-- Menu -->
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.sidebar {
  position: relative;
  min-width: rem(256);
  width: rem(256);
  height: 100%;
}

.profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__info {
    padding: rem(24) 0 rem(12);
    width: 100%;
    background-image: url("@/assets/img/sidebar-profile-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(4);
  }

  &__avatar {
    position: relative;
    margin-bottom: rem(10);
    width: rem(64);
    height: rem(64);
    border-radius: 50%;
    padding: rem(3);
    background: conic-gradient(
      from 0deg,
      var(--background) 0%,
      var(--primary) 100%
    );

    &::before {
      content: "";
      position: absolute;
      inset: rem(3);
      background-color: var(--deep-blue);
      border-radius: 50%;
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    &-level {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      transform: translate(15%, 15%);
      background-color: var(--deep-blue);
      border: rem(2) solid #141c2a;
      border-radius: 50%;
      width: rem(28);
      height: rem(28);
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: var(--primary);
        font-weight: 600;
        font-size: rem(12);
        text-align: center;
        text-shadow: 0 0 rem(12) 0 rgba(48, 141, 248, 0.48);
      }
    }
  }

  &__id {
    color: var(--gray-2);
    font-weight: 600;
    font-size: rem(12);
  }

  &__name span {
    font-weight: 700;
    font-size: rem(14);
    text-align: center;
  }

  &__balance {
    position: relative;
    width: 100%;
    height: rem(34);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: rem(1);
      background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
    }

    &::after {
      top: auto;
      bottom: 0;
    }

    &-item {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: rem(6);

      &:first-child {
        border-right: rem(1) solid rgba(255, 255, 255, 0.1);
      }

      svg {
        width: rem(14);
        height: rem(14);
      }

      span {
        font-size: rem(12);
        font-weight: 500;
      }
    }
  }
}
</style>
