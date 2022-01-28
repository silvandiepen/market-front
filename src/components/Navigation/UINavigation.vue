<template>
  <nav class="ui-navigation">
    <UINavigationList :menu="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
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
    return {};
  },
});
</script>
<style lang="scss" src="./UINavigation.scss" />