<script lang="ts">
import Vue from "vue";
import {
  UserCircle,
  Sparkles,
  Animations,
  Customization,
  Store,
  BattlePass,
  Help,
  Donate,
  ChevronDown,
  Settings,
} from "@/components/icons";

interface MenuChild {
  title: string;
  path: string;
}

interface MenuItem {
  icon: string;
  title: string;
  path?: string;
  children?: MenuChild[];
}

export default Vue.extend({
  name: "NavMenu",
  components: {
    UserCircle,
    Sparkles,
    Animations,
    Customization,
    Store,
    BattlePass,
    Help,
    Donate,
    ChevronDown,
    Settings,
  },
  data() {
    return {
      openSection: "Персонаж" as string | null,
      menuItems: [
        {
          icon: "UserCircle",
          title: "Персонаж",
          children: [
            { title: "Информация", path: "/character" },
            { title: "Имущество", path: "/character/inventory" },
            { title: "Навыки работы", path: "/character/skills" },
            { title: "Достижения", path: "/character/achievements" },
            { title: "Реферальная система", path: "/character/referral" },
            { title: "Рейтинг лучших", path: "/character/rating" },
            { title: "Промокод", path: "/character/promo" },
          ],
        },
        {
          icon: "Sparkles",
          title: "События",
          children: [
            { title: "Информация", path: "/Character" },
            { title: "Имущество", path: "/character/inventory" },
            { title: "Навыки работы", path: "/character/skills" },
            { title: "Достижения", path: "/character/achievements" },
            { title: "Реферальная система", path: "/character/referral" },
            { title: "Рейтинг лучших", path: "/character/rating" },
            { title: "Промокод", path: "/character/promo" },
          ],
        },
        {
          icon: "Animations",
          title: "Анимации",
          path: "/animations",
        },
        {
          icon: "Customization",
          title: "Кастомизация",
          path: "/customization",
        },
        {
          icon: "Store",
          title: "Магазин",
          path: "/shop",
        },
        {
          icon: "BattlePass",
          title: "Боевой пропуск",
          path: "/battle-pass",
        },
        {
          icon: "Help",
          title: "Помощь",
          path: "/help",
        },
        {
          icon: "Donate",
          title: "Донат-интегратор",
          path: "/donate",
        },
        {
          icon: "Settings",
          title: "Настройки",
          path: "/settings",
        },
      ] as MenuItem[],
    };
  },
  created() {
    this.syncOpenSection();
  },
  watch: {
    $route() {
      this.syncOpenSection();
    },
  },
  methods: {
    toggleSection(title: string) {
      if (!this.getSectionByTitle(title)?.children) {
        return;
      }

      if (this.openSection === title) {
        this.openSection = null;
      } else {
        this.openSection = title;
      }
    },
    isSectionOpen(title: string): boolean {
      return this.openSection === title;
    },
    isRouteActive(path: string): boolean {
      return this.$route.path.startsWith(path);
    },
    getSectionByTitle(title: string) {
      return this.menuItems.find((item) => item.title === title);
    },
    syncOpenSection() {
      const activeSection = this.menuItems.find((item) => {
        if (!item.children) {
          return false;
        }
        return item.children.some((child) => this.isRouteActive(child.path));
      });

      this.openSection = activeSection ? activeSection.title : this.openSection;
    },
    enter(element: HTMLElement) {
      element.style.height = "0";
      element.style.opacity = "0";

      requestAnimationFrame(() => {
        element.style.height = element.scrollHeight + "px";
        element.style.opacity = "1";
      });
    },
    afterEnter(element: HTMLElement) {
      element.style.height = "auto";
    },
    leave(element: HTMLElement) {
      element.style.height = element.scrollHeight + "px";

      requestAnimationFrame(() => {
        element.style.height = "0";
        element.style.opacity = "0";
      });
    },
  },
});
</script>

<template>
  <div class="menu">
    <div v-for="item in menuItems" :key="item.title" class="menu-item">
      <router-link
        v-if="!item.children"
        :to="item.path"
        class="menu-link"
        active-class="active"
      >
        <span class="menu-icon">
          <component :is="item.icon" />
        </span>
        <span class="menu-title">{{ item.title }}</span>
      </router-link>

      <div v-else class="menu-section">
        <div
          class="menu-link"
          :class="{ open: isSectionOpen(item.title) }"
          @click="toggleSection(item.title)"
        >
          <span class="menu-icon">
            <component :is="item.icon" />
          </span>
          <span class="menu-title">{{ item.title }}</span>
          <ChevronDown class="menu-arrow" />
        </div>

        <transition
          name="accordion"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
        >
          <div v-show="isSectionOpen(item.title)" class="submenu">
            <router-link
              v-for="child in item.children"
              :key="child.path"
              :to="child.path"
              class="submenu-link"
              active-class="active"
            >
              <span class="submenu-bullet" />
              <span class="submenu-title">{{ child.title }}</span>
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.menu {
  padding-bottom: rem(14);
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-item {
  width: 100%;

  &:last-child {
    margin-top: auto;
  }
}

.menu-link {
  padding: 0 rem(24) 0 rem(36);
  height: rem(48);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(12);
  transition: color 0.2s ease, background 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #e7ecff;
    background: rgba(48, 141, 248, 0.05);
  }

  &.active {
    background: linear-gradient(
      90deg,
      rgba(48, 141, 248, 0) 0%,
      rgba(48, 141, 248, 0.24) 100%
    );
  }

  &.open {
    background: linear-gradient(
      90deg,
      rgba(48, 141, 248, 0) 0%,
      rgba(48, 141, 248, 0.24) 100%
    );

    .menu-icon {
      color: var(--primary);
    }

    .menu-arrow {
      color: #fff;
      transform: rotate(180deg);
    }
  }
}

.menu-icon {
  color: rgb(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-ease);

  svg {
    width: rem(18);
    height: rem(18);
  }
}

.menu-title {
  font-size: rem(12);
  font-weight: 500;
}

.menu-arrow {
  margin-left: auto;
  width: rem(14);
  height: rem(14);
  color: var(--gray-2);
  transition: var(--transition-ease);
}

.submenu {
  position: relative;
  padding: rem(8) 0;
  background: linear-gradient(to right, #10131b 0%, #141c2a 100%);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: rem(1);
    background: linear-gradient(to right, transparent, var(--border));
  }
}

.submenu-link {
  padding: 0 rem(24) 0 rem(40);
  height: rem(36);
  color: var(--gray-2);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: rem(16);

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #f6c457;

    .submenu-bullet {
      background: #f6c457;
      box-shadow: 0 0 rem(8) rgba(246, 196, 87, 0.4);
    }
  }
}

.submenu-bullet {
  width: rem(6);
  height: rem(6);
  background: rgba(255, 255, 255, 0.15);
  transform: rotate(45deg);
  border-radius: rem(1);
}

.submenu-title {
  font-size: rem(12);
  font-weight: 500;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
