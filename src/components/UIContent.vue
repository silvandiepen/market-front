<template>
  <section id="content" class="ui-content">
    <div class="ui-content__container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </section>
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
.ui-content {
  &__container {
    padding: calc(var(--space) / 2) 0;
    // border: 1px solid blue;
    width: var(--container-width);
    margin: auto;
    .content {
      max-width: 720px;
      margin: auto;
      padding: calc(var(--space) / 2);
    }
  }
}
</style>
