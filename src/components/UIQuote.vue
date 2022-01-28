<template>
  <section
    id="quote"
    class="ui-quote"
    :class="`ui-quote--${visible ? 'visible' : 'hidden'}`"
  >
    <div class="ui-quote__container">
      <div class="ui-quote__content">
        <slot></slot>
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
      setInviewElement(document.querySelector("#quote"));
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
.ui-quote {
  $block: &;
  padding: var(--space);

  &__container {
    color: var(--foreground);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--space));

    border-radius: var(--border-radius);

    width: var(--container-width);
    margin: auto;
  }
  &__content {
    transform: translateY(calc(var(--space) * 2));
    transition: transform 0.3s ease-in-out;
    font-size: 2em;
    text-align: center;
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
