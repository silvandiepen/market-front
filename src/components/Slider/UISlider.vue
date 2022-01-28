<template>
  <section
    class="ui-slider"
    :class="[settings.playing ? 'ui-slider--playing' : '']"
    id="slider"
    :ref="slider"
  >
    <div class="ui-slider__container">
      <UISliderItem
        v-for="(slide, index) in slides"
        :key="index"
        :slide="slide"
        :index="index"
      />
    </div>
    <div class="ui-slider__controls">
      <div class="ui-slider__arrow-container ui-slider__arrow-container--prev">
        <button
          @click="prevSlide"
          class="ui-slider__arrow-button ui-slider__arrow-button--prev"
        ></button>
      </div>
      <div class="ui-slider__arrow-container ui-slider__arrow-container--next">
        <button
          @click="nextSlide"
          class="ui-slider__arrow-button nui-slider__arrow-button--next"
        ></button>
      </div>
      <nav class="ui-slider__dots">
        <button
          @click="goToSlide(index)"
          class="ui-slider__dot"
          v-for="(dot, index) in dots"
          :key="index"
          :class="dot.classes"
        />
      </nav>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, PropType } from "vue";
import { useInview } from "../../composables";
import UISliderItem from "./UISliderItem.vue";
import { Slide } from "./UISlider.model";
import useSlider from "./useSlider";

export default defineComponent({
  props: {
    slides: {
      type: Array as PropType<Slide[]>,
      default: () => [],
      required: true,
    },
  },
  components: {
    UISliderItem,
  },
  setup(props) {
    const slider = ref();
    const {
      settings,
      slides,
      startSlider,
      stopSlider,
      defineSlides,
      goToSlide,
      nextSlide,
      prevSlide,
      setSlideClasses,
      dots,
    } = useSlider();

    setSlideClasses({
      slide: "ui-slider__slide",
      dot: "ui-slider__dot",
    });

    defineSlides(props.slides);

    const { isInview, setInviewElement } = useInview();
    onMounted(() => {
      setInviewElement(document.querySelector("#slider"));
    });

    watch(
      () => isInview.value,
      () => {
        isInview.value ? startSlider() : stopSlider();
      }
    );

    return {
      slider,
      slides,
      stopSlider,
      goToSlide,
      nextSlide,
      prevSlide,
      settings,
      dots,
    };
  },
});
</script>
<style lang="scss" src="./UISlider.scss" />
