<template>
  <div class="ui-image">
    <div class="ui-image__container">
      <img v-if="src" :src="src" alt="Some description" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    src: { type: String, default: "" },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.ui-image {
  &__container {
    background-color: var(--foreground);
    color: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;

    // width: var(--container-width);
    margin: auto;

    border-radius: var(--border-radius);

    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      border-radius: var(--border-radius);
    }
  }
}
</style>
