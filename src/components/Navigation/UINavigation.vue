<template>
  <nav
    class="ui-navigation"
    :class="[active ? 'ui-navigation--active' : 'ui-navigation--inactive']"
  >
    <div class="ui-navigation__container">
      <UINavigationList :menu="menu" />
    </div>
    <button
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
import { MenuItem } from "../../types";
import UINavigationList from "../Navigation/UINavigationList.vue";

export default defineComponent({
  components: { UINavigationList },
  props: {
    menu: {
      type: Array as PropType<MenuItem[]>,
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
