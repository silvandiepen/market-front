<template>
  <li class="ui-navigation__item">
    <a class="ui-navigation__link" :href="item.link">
      <span class="ui-navigation__text">{{ item.label }}</span>
    </a>
    <!-- <UINavigationList v-if="item.children.length" :menu="item.children" /> -->
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItem } from "../../types";
// import UINavigationList from "./UINavigationList.vue";

export default defineComponent({
  // components: { UINavigationList },
  props: {
    item: {
      type: Object as PropType<MenuItem>,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
});
</script>