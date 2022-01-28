<template>
  <component
    :is="tag"
    class="ui-button"
    :class="`ui-button--${variation}`"
    :href="link"
  >
    <span class="ui-button__text"><slot /></span>
  </component>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    link: { type: String, default: "" },
    route: { type: String, default: "" },
    variation: { type: String, default: "primary" },
  },
  setup(props) {
    const tag = ref("button");

    if (props.link) {
      tag.value = "a";
    }

    return { tag };
  },
});
</script>
<style lang="scss">
.ui-button {
  padding: 1em 2em;
  line-height: 1;
  border-radius: var(--border-radius);
  border: none;
  position: relative;

  background-color: var(--button-background-color);
  color: var(--button-color);
  display: inline-block;
  text-decoration: none;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--button-hover-color, rgba(0, 0, 0, 0.05));
    position: absolute;
    left: 0;
    top: 0;
    border-radius: var(--border-radius);
    z-index: 0;
    clip-path: inset(0 0 0 100%);
    transition: clip-path 0.3s ease-in-out;
  }

  &:hover {
    @at-root {
      @keyframes buttonBump {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
    }
    animation: buttonBump 0.2s ease-in-out forwards;

    &::before {
      clip-path: inset(0 0 0 0%);
    }
  }
  &__text {
    font-size: 1.25em;
    position: relative;
    z-index: 0;
  }

  &--primary {
    --button-background-color: var(--primary);
    --button-color: var(--background);
  }
  &--secondary {
    --button-background-color: var(--secondary);
    --button-color: var(--foreground);
  }
  &--background {
    --button-background-color: var(--background);
    --button-color: var(--foreground);
  }
  &--foreground {
    --button-background-color: var(--foreground);
    --button-color: var(--background);
  }
}
</style>
