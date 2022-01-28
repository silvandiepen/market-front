<template>
  <div
    class="ui-slider__slide"
    :class="slide.classes"
    :style="`--slide-background-color: var(--${slide.background}); --slide-color: var(--${slide.color})`"
  >
    <div class="ui-slider__image" v-if="slide.image">
      <img :src="slide.image" />
    </div>
    <div class="ui-slider__content-container">
      <div class="ui-slider__content">
        <div class="content">
          <h2 v-if="slide.content.title">{{ slide.content.title }}</h2>
          <h4 v-if="slide.content.subtitle">{{ slide.content.subtitle }}</h4>
          <p v-if="slide.content.description">
            {{ slide.content.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Slide } from "./UISlider.model";

export default defineComponent({
  props: {
    index: {
      type: Number,
      default: 0,
    },
    slide: {
      type: Object as PropType<Slide>,
      default: () => {},
    },
  },
});
</script>