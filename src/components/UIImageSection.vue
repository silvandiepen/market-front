<template>
  <section class="ui-image-section">
    <div class="ui-image-section__container"><slot></slot></div>
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
.ui-image-section {
  z-index: 2;
  position: relative;
  &__container {
    background-color: var(--foreground);
    color: var(--background);
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-end;

    // grid-template-columns: description image image image;
    @media screen and (min-width: getConfig(max-width)) {
      padding: var(--half-space);
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-template: "description image image image image";
    }
  }

  .ui-image {
    grid-area: image;
  }
  .ui-description {
    grid-area: description;
  }

  .ui-image {
    padding: var(--half-space);
    @media screen and (min-width: getConfig(max-width)) {
      margin-bottom: calc((var(--space) * 2) * -1);
      margin-top: calc((var(--space) * 2) * -1);
    }
  }
  .ui-description {
    display: flex;
  }
}
</style>
