<template>
  <div class="ui-image">
    <div class="ui-image__container">
      <img v-if="src" :src="src" />
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
    padding: calc(var(--space) / 2);

    width: var(--container-width);
    margin: auto;
    @media screen and (min-width: getConfig(max-width)) {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--border-radius);
    }
  }
}
</style>
