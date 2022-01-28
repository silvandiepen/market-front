<template>
  <section
    class="ui-header"
    :class="[
      isOnTop || !isGoingDown ? 'ui-header--visible' : 'ui-header--hidden',
    ]"
    id="header"
  >
    <div class="ui-header__container">
      <h1 class="ui-header__logo">Storefront</h1>
      <UINavigation class="ui-header__menu" :menu="menu" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuItem } from "../types";
import { useScroll } from "../composables";
import UINavigation from "./Navigation/UINavigation.vue";

export default defineComponent({
  components: { UINavigation },
  setup() {
    const menu: MenuItem[] = [
      {
        label: "Shop",
        link: "#shop",
        children: [{ label: "Categories", link: "#shop-categories" }],
      },
      {
        label: "About",
        link: "#about",
      },
      {
        label: "Contact",
        link: "#contact",
      },
    ];

    const { isOnTop, isGoingDown } = useScroll({ treshhold: 10 });

    return {
      menu,
      isOnTop,
      isGoingDown,
    };
  },
});
</script>
<style lang="scss">
.ui-header {
  $block: &;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 3;

  opacity: 0;
  transform: translateY(var(--space));
  animation: headerFadeIn 1s 2s ease-in-out forwards;
  color: var(--background);

  @at-root {
    @keyframes headerFadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &__logo {
    font-weight: 500;
    font-size: 1.5em;
  }
  &__menu {
  }
  &__container {
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    background-color: var(--foreground);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--space) / 4) calc(var(--space) / 2);
    // border: 1px solid blue;
    width: var(--container-width);
    margin: auto;

    border-radius: 0;

    @media screen and (min-width: #{getConfig('max-width')}) {
      margin-top: calc(var(--space) / 4);
      border-radius: var(--border-radius);
    }
  }
  &--hidden #{$block}__container {
    transform: translateY(-25%);
    opacity: 0;
  }

  &--visible #{$block}__container {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>