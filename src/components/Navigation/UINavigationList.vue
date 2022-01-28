<template>
  <ul class="navigation__list">
    <UINavigationItem v-for="(item, index) in menu" :key="index" :item="item" />
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItem } from "../../types";
import UINavigationItem from "./UINavigationItem.vue";

export default defineComponent({
  components: { UINavigationItem },
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