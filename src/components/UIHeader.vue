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
      <UINavigation
        class="ui-header__navigation"
        :menu="menu"
        :withToggle="true"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { UINavigation } from "./Navigation";
import { useScroll } from "../composables";

import { menu } from "../mockData";

export default defineComponent({
  components: { UINavigation },
  setup() {
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
  transform: translateY(calc(#{v(space)} * -1));
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
    line-height: 2;
  }
  &__menu {
  }
  &__container {
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    background-color: var(--foreground);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: calc(#{v(half-space)} / 2) #{v(half-space)};
    // border: 1px solid blue;
    width: #{v(container-width)};
    margin: auto;

    border-radius: 0;

    @media screen and (min-width: #{getConfig('max-width')}) {
      margin-top: calc(#{v(space)} / 4);
      border-radius: #{v(border-radius)};
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

  &__navigation {
    @media screen and (max-width: getConfig(mobile)) {
      .ui-navigation__sub {
        display: none;
      }
    }
    @media screen and (min-width: getConfig(mobile)) {
      .ui-navigation__item {
        position: relative;
      }
      .ui-navigation__sub {
        opacity: 0;
        display: block;
        transform: scale(0.5) translateX(-50%);
        transform-origin: 0 0%;
        position: absolute;
        left: 50%;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

        padding-top: 1em;
      }
      .ui-navigation__text {
        white-space: nowrap;
      }
      .ui-navigation__list--sub {
        border-radius: #{v(border-radius)};
        padding: 1em;
        background-color: var(--background);
        color: var(--foreground);
      }
      .ui-navigation__item:hover .ui-navigation__sub {
        transform: scale(1) translateX(-50%);
        opacity: 1;
        transform-origin: 0 50%;
      }
    }
  }
}
</style>
