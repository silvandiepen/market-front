<template>
  <section
    id="intro"
    class="ui-intro"
    :style="`--ui-intro-background-image: url(${image})`"
  >
    <div class="ui-intro__background"></div>
    <div class="ui-intro__container">
      <h2>
        <span v-for="(word, index) in title.split('-')" :key="index">{{
          word
        }}</span>
      </h2>
    </div>
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
body {
  perspective: 10px;
}
.ui-intro {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 720px) {
    align-items: flex-end;
  }

  background-color: #{v(primary)};
  color: var(--background);
  z-index: 2;
  position: relative;
  clip-path: inset(0 0 0 0);

  animation: curtainUp 1s 2s forwards ease-in-out;

  &__container {
    padding: #{v(half-space)};

    width: #{v(container-width)};
    margin: auto;

    @media screen and (min-width: getConfig(max-width)) {
      border-radius: #{v(border-radius)} #{v(border-radius)} 0 0;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: var(--ui-intro-background-image);
    background-size: cover;
    background-position: center center;
    background-color: blue;
  }

  @at-root {
    @keyframes curtainUp {
      to {
        clip-path: inset(0 0 calc((#{v(space)} * 3)) 0);
      }
    }
  }

  h2 {
    font-size: #{v(space)};
    display: flex;
    flex-direction: column;
    animation: upALittle 1s 2s forwards ease-in-out;

    @media screen and (max-width: 720px) {
      font-size: calc(#{v(space)} * 1.5);
    }

    @at-root {
      @keyframes upALittle {
        to {
          opacity: 1;
          transform: translateY(calc((#{v(space)} * 0.5) * -1)) translateZ(20px);
        }
      }
    }
    span {
      opacity: 0;
      transform: translateY(100%);
      clip-path: inset(0 0 100% 0);
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
            clip-path: inset(0 0 0% 0);
            transform: translateY(0%);
          }
        }
      }
    }
  }

  & + .ui-panel {
    margin-top: calc((#{v(space)} * 3) * -1);
  }
}
</style>
