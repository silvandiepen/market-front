<template>
  <section
    id="banner"
    class="ui-banner"
    :class="`ui-banner--${visible ? 'visible' : 'hidden'}`"
  >
    <div class="ui-banner__container">
      <div class="ui-banner__content">
        <h2>Do you like what you are seeing?</h2>
        <h3>Then let's do something with it!</h3>
        <p>Go to Vue Storefront and get try it out for yourself</p>
        <UIButton variation="foreground">Test</UIButton>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch, ref } from "vue";
import UIButton from "./UIButton.vue";
import { useInview } from "../composables/useUI";

export default defineComponent({
  components: {
    UIButton,
  },
  setup() {
    const { isInview, setInviewElement } = useInview();

    const visible = ref(false);

    onMounted(() => {
      setInviewElement(document.querySelector("#banner"));
    });

    watch(
      () => isInview.value,
      () => {
        visible.value = isInview.value;
      }
    );

    return {
      visible,
    };
  },
});
</script>
<style lang="scss">
.ui-banner {
  $block: &;
  &__container {
    background-color: var(--primary);
    color: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--space));

    border-radius: var(--border-radius);

    width: var(--container-width);
    margin: auto;
  }
  &__content {
    transform: translateX(calc(var(--space) * 2));
    transition: transform 0.3s ease-in-out;
  }
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &--visible {
    transform: scale(1);
    opacity: 1;
    #{$block}__content {
      transform: translateX(0);
    }
  }
  &--hidden {
    transform: scale(0.8);
    opacity: 0;
  }
}
</style>