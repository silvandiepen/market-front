<template>
  <nav
    class="ui-navigation"
    :class="[
      withToggle && 'ui-navigation--mobile',
      active && withToggle
        ? 'ui-navigation--active'
        : 'ui-navigation--inactive',
    ]"
  >
    <div class="ui-navigation__container">
      <UINavigationList :menu="menu" />
    </div>
    <button
      v-if="withToggle"
      class="ui-navigation__toggle"
      @click="active = !active"
      aria-label="toggle menu"
    >
      <span></span>
    </button>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { UINavigationMenuItem } from "./UINavigation.model";
import UINavigationList from "../Navigation/UINavigationList.vue";

export default defineComponent({
  components: { UINavigationList },
  props: {
    withToggle: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array as PropType<UINavigationMenuItem[]>,
      default: () => [],
    },
  },
  setup() {
    const active = ref(false);
    return { active };
  },
});
</script>
<style lang="scss" src="./UINavigation.scss" />
