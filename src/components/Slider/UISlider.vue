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
import { defineComponent, onMounted, ref, watch } from "vue";
import { useInview } from "../../composables";
import UISliderItem from "./UISliderItem.vue";
import useSlider from "./useSlider";

export default defineComponent({
  components: {
    UISliderItem,
  },
  setup() {
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

    defineSlides([
      {
        background: "primary",
        color: "background",
        image:
          "https://images.unsplash.com/photo-1560961911-a21c4f35443f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
        content: {
          title: "First Slide",
          subtitle: "Another slide on the wall",
          description:
            "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
        },
      },
      {
        background: "secondary",
        color: "foreground",
        image:
          "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
        content: {
          title: "Second Slide",
          subtitle: "Another slide on the wall",
          description:
            "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
        },
      },
      {
        background: "warning",
        color: "background",
        image:
          "https://images.unsplash.com/photo-1560961911-293cfd783727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
        content: {
          title: "Third Slide",
          subtitle: "Another slide on the wall",
          description:
            "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
        },
      },
      {
        background: "foreground",
        color: "background",
        image:
          "https://images.unsplash.com/photo-1560961911-0ac252fecc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
        content: {
          title: "Last Slide",
          subtitle: "Another slide on the wall",
          description:
            "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
        },
      },
    ]);

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