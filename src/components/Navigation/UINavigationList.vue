<template>
  <ul class="ui-navigation__list">
    <UINavigationItem v-for="(item, index) in menu" :key="index" :item="item" />
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UINavigationMenuItem } from "./UINavigation.model";
import UINavigationItem from "./UINavigationItem.vue";

export default defineComponent({
  components: { UINavigationItem },
  props: {
    menu: {
      type: Array as PropType<UINavigationMenuItem[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>
