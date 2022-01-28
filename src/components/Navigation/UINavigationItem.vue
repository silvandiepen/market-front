<template>
  <li class="ui-navigation__item">
    <a class="ui-navigation__link" :href="item.link">
      <span class="ui-navigation__text">{{ item.label }}</span>
    </a>
    <div class="ui-navigation__sub" v-if="item.children">
      <ul class="ui-navigation__list ui-navigation__list--sub">
        <li
          class="ui-navigation__item ui-navigation__item--sub"
          v-for="(subitem, index) in item.children"
          :key="index"
        >
          <a class="ui-navigation__link" :href="subitem.link">
            <span class="ui-navigation__text">{{ subitem.label }}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- <UINavigationSublist v-if="item.children.length" :menu="item.children" /> -->
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType, defineAsyncComponent } from "vue";
import { UINavigationMenuItem } from "./UINavigation.model";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<UINavigationMenuItem>,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
});
</script>
