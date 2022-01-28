<template>
  <section id="intro" class="ui-intro">
    <h2><span>Welcome </span><span>to </span><span>Storefront</span></h2>
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
.ui-intro {
  // border: 1px solid red;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
  color: var(--background);
  z-index: 2;
  position: relative;
  clip-path: inset(0 0 0 0);

  animation: curtainUp 1s 2s forwards ease-in-out;

  @at-root {
    @keyframes curtainUp {
      to {
        clip-path: inset(0 0 calc((var(--space) * 3)) 0);
      }
    }
  }

  h2 {
    font-size: var(--space);
    gap: 0.33em;
    display: flex;
    animation: upALittle 1s 2s forwards ease-in-out;

    @at-root {
      @keyframes upALittle {
        to {
          opacity: 1;
          transform: translateY(calc((var(--space) * 1) * -1));
        }
      }
    }
    span {
      opacity: 0;
      transform: translateY(100%);
      display: inline-block;
      &:nth-child(1) {
        animation: spanIn 1s 0s forwards ease-in-out;
      }
      &:nth-child(2) {
        animation: spanIn 1s 0.5s forwards ease-in-out;
      }
      &:nth-child(3) {
        animation: spanIn 1s 1s forwards ease-in-out;
      }
      @at-root {
        @keyframes spanIn {
          to {
            opacity: 1;
            transform: translateY(0%);
          }
        }
      }
    }
  }

  & + .ui-panel {
    margin-top: calc((var(--space) * 3) * -1);
  }
}
</style>