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
    height: fit-content;
    align-self: flex-end;
    padding: var(--half-space);
  }
}
</style>
