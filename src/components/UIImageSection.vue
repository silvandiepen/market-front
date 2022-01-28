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
  &__container {
    background-color: var(--foreground);
    color: var(--background);
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-end;

    // grid-template-columns: description image image image;
    @media screen and (min-width: 720px) {
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
  }
  .ui-description {
    display: flex;
  }
}
</style>
