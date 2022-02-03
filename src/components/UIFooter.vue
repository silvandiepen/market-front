<template>
  <section id="footer" class="ui-footer">
    <div class="ui-footer__container">
      <div class="ui-footer__logo">
        <h1>Storefront</h1>
      </div>
      <UINavigation class="ui-footer__navigation" :menu="menu" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { UINavigation } from "./Navigation";

import { menu } from "../mockData";
export default defineComponent({
  components: {
    UINavigation,
  },
  setup() {
    return {
      menu,
    };
  },
});
</script>
<style lang="scss">
.ui-footer {
  &__container {
    background-color: var(--foreground);
    color: var(--background);

    width: #{v(container-width)};
    margin: auto;

    @media screen and (min-width: getConfig(mobile)) {
      padding: #{v(space)};
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    @media screen and (min-width: getConfig(max-width)) {
      border-radius: #{v(border-radius)} #{v(border-radius)} 0 0;
    }
  }
  &__navigation {
    @media screen and (max-width: getConfig(mobile)) {
      padding: calc(#{v(space)} - 1em);
    }
    .ui-navigation__container > .ui-navigation__list {
      gap: #{v(space)};
    }
  }
  &__logo {
    @media screen and (max-width: getConfig(mobile)) {
      background-color: #{v(primary)};
      padding: #{v(space)};
    }
    h1 {
      font-weight: 500;
      font-size: 1.5em;
    }
  }
}
</style>
