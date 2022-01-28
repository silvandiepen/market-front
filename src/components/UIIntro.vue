<template>
  <section
    id="intro"
    class="ui-intro"
    :style="`--ui-intro-background-image: url(${image})`"
  >
    <div class="ui-intro__background"></div>
    <h2>
      <span v-for="(word, index) in title.split(' ')" :key="index">{{
        word
      }}</span>
    </h2>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
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

  &__background {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: var(--ui-intro-background-image);
    background-size: cover;
    mix-blend-mode: darken;
  }

  @at-root {
    @keyframes curtainUp {
      to {
        clip-path: inset(0 0 calc((var(--space) * 3)) 0);
      }
    }
  }

  h2 {
    font-size: var(--space);
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
      margin: 0.1em;
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation: spanIn
            1s
            calc(((0.5 * #{$i}) - 0.5) * 1s)
            forwards
            ease-in-out;
        }
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
