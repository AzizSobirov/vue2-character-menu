<script lang="ts">
import Vue from "vue";
import { Crown, Info } from "@/components/icons";
import { Profile } from "@/types/profile";

export default Vue.extend({
  name: "CharacterInfoPage",
  components: {
    Info,
    Crown,
  },
  computed: {
    profile(): Profile {
      return this.$store.state.profile;
    },
  },
});
</script>

<template>
  <section class="info">
    <div class="character">
      <div
        class="character__level"
        :style="{
          '--level': (profile.level / profile.maxLevel) * 100 + '%',
        }"
      >
        <img :src="profile.avatar" alt="" />

        <div class="character__level-value">{{ profile.level }}</div>
        <div class="character__level-label">Уровень</div>
        <div class="character__level-max">
          {{ profile.level }}/{{ profile.maxLevel }}
        </div>
      </div>

      <div class="character__info">
        <div class="character__text">
          <div class="character__status">
            <div
              class="character__status-badge"
              :style="{ background: profile.status.color }"
            >
              <Crown />
              <span>{{ profile.status.name }}</span>
            </div>
            <div class="character__status-duration">
              <span>{{ profile.status.end_date }}</span>
            </div>
          </div>

          <div class="character__text-title">
            Добрый вечер, <br />
            <span>{{ profile.name }}</span
            >!
          </div>

          <div class="character__text-desc">
            В данном меню вы можете узнать всю необходимую информацию <br />
            связанную с вашем персонажем и вашем имуществе
          </div>
        </div>

        <div class="character__details">
          <div class="character__list">
            <div class="character__item">
              <img src="@/assets/img/name.png" alt="" />
              <div class="character__item-group">
                <span class="character__item-label">Имя</span>
                <span class="character__item-value">{{ profile.name }}</span>
              </div>
            </div>

            <div class="character__item">
              <img src="@/assets/img/finger.png" alt="" />
              <div class="character__item-group">
                <span class="character__item-label">Имя</span>
                <span class="character__item-value">{{ profile.name }}</span>
              </div>
            </div>

            <div class="character__item">
              <img src="@/assets/img/male.png" alt="" />
              <div class="character__item-group">
                <span class="character__item-label">Имя</span>
                <span class="character__item-value">{{ profile.name }}</span>
              </div>
            </div>

            <div class="character__item">
              <img src="@/assets/img/pasport.png" alt="" />
              <div class="character__item-group">
                <span class="character__item-label">Имя</span>
                <span class="character__item-value">{{ profile.name }}</span>
              </div>
            </div>

            <div class="character__item">
              <img src="@/assets/img/date.png" alt="" />
              <div class="character__item-group">
                <span class="character__item-label">Имя</span>
                <span class="character__item-value">{{ profile.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <h1>Информация о персонаже</h1>
      <Info />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.character {
  position: relative;
  padding: rem(64) rem(64) rem(24);
  min-height: rem(354);
  width: 100%;
  background: linear-gradient(
      90deg,
      rgba(16, 23, 35, 0.48) 0%,
      rgba(16, 23, 35, 0) 100%
    ),
    linear-gradient(0deg, #101723 24%, rgba(16, 23, 35, 0) 48%);
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: rem(24);

  &__level {
    position: relative;
    padding: rem(12);
    min-width: rem(196);
    width: rem(196);
    height: rem(266);
    border-radius: rem(12);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: var(--level);
      max-width: 100%;
      height: rem(72);
      background: linear-gradient(to bottom, transparent, #5da9ff60 100%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: var(--level);
      max-width: 100%;
      height: rem(2);
      background: var(--primary);
    }

    &-value {
      position: relative;
      z-index: 2;
      font-size: rem(24);
      font-weight: 700;
    }

    &-label {
      position: relative;
      z-index: 2;
      font-size: rem(14);
      font-weight: 500;
    }

    &-max {
      position: relative;
      z-index: 2;
      margin-top: rem(8);
      padding: rem(8) rem(10);
      font-size: rem(10);
      font-weight: 500;
      line-height: 1;
      background: var(--background);
      border-radius: rem(4);
      font-variant-numeric: tabular-nums;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(40);
  }

  &__text {
    padding-top: rem(12);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(12);
    text-wrap: balance;

    &-title {
      font-size: rem(24);
      line-height: 1.25;
      font-weight: 600;

      span {
        color: var(--orange);
      }
    }

    &-desc {
      font-size: rem(12);
      font-weight: 500;
      color: rgb(255, 255, 255, 0.5);
      line-height: 1.35;
    }
  }

  &__status {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    gap: rem(8);

    &-badge {
      padding: rem(5) rem(8);
      border-radius: rem(4);
      font-size: rem(12);
      font-weight: 600;
      color: var(--background);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: rem(6);

      svg {
        width: rem(14);
        height: rem(14);
      }
    }

    &-duration {
      padding: 0 rem(10);
      font-size: rem(10);
      color: var(--gray-2);
      background: var(--background);
      border-radius: rem(4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__details {
    margin-top: auto;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(24);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: rem(16);
  }

  &__item {
    padding: rem(12);
    min-width: rem(160);
    width: rem(160);
    height: rem(60);
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(12);

    img {
      width: rem(36);
      height: rem(36);
      object-fit: contain;
    }

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: rem(4);
    }

    &-label {
      font-size: rem(12);
      color: var(--gray-2);
    }

    &-value {
      font-size: rem(14);
      font-weight: 600;
    }
  }
}

.wrapper {
  padding: rem(36) rem(64);
  flex-grow: 1;
  width: 100%;
  background: url("@/assets/img/dot-bg.png") center,
    linear-gradient(to bottom, #141c2a, #101723);
  border-top: rem(1) solid var(--border);
}
</style>
