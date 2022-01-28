<template>
  <div class="ui-description">
    <div class="ui-description__container content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.ui-description {
  &__container {
    background-color: var(--foreground);
    color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--space) / 2);

    width: var(--container-width);
    margin: auto;
    @media screen and (min-width: getConfig(max-width)) {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
  }
}
</style>
