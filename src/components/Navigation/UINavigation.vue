<template>
  <nav class="navigation">
    <UINavigationList :menu="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItem } from "../types";
import UINavigationList from "./UINavigationList.vue";

export default defineComponent({
  components: { UINavigationList },
  props: {
    menu: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.navigation {
  &__list {
    display: flex;
  }
  &__item {
  }
  &__link {
    display: block;
    line-height: 1;
    padding: 1em;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }
  &__text {
    font-size: 1em;
    font-family: var(--primary-font-family);
  }
}
</style>