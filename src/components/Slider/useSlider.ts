import { reactive, ref, computed } from "vue";
import { Slide, SlideClassElements, SlideClasses } from "./UISlider.model";

export default function () {
  const currentSlides = ref<Slide[]>([]);

  const settings = reactive({
    playing: false,
    paused: false,
    active: 0,
    next: 1,
    prev: currentSlides.value.length - 1,
    interval: 0,
  });

  const isActiveSlide = (index: number): boolean => index === settings.active;
  const isNextSlide = (index: number): boolean => index === settings.next;
  const isPrevSlide = (index: number): boolean => index === settings.prev;

  const classes = reactive<SlideClasses>({
    active: "--active",
    next: "--next",
    prev: "--prev",
    slide: "slide",
    dot: "dot",
  });

  const setSlideClasses = (newClasses: Partial<SlideClasses>) => {
    Object.keys(newClasses).forEach((key) => {
      // @ts-ignore
      classes[key as SlideClassElements] =
        newClasses[key as SlideClassElements];
    });
  };

  const slideClasses = (prefix: string, index: number): string[] => {
    const classNames: string[] = [];

    if (isActiveSlide(index)) classNames.push(`${prefix}${classes.active}`);
    if (isNextSlide(index)) classNames.push(`${prefix}${classes.next}`);
    if (isPrevSlide(index)) classNames.push(`${prefix}${classes.prev}`);

    return classNames;
  };

  const slides = computed(() => {
    return currentSlides.value.map((slide, index) => {
      return {
        ...slide,
        isNext: isNextSlide(index),
        isActive: isActiveSlide(index),
        isPrev: isPrevSlide(index),
        classes: slideClasses(classes.slide, index),
      };
    });
  });

  const dots = computed(() => {
    return currentSlides.value.map((slide, index) => {
      return {
        ...slide,
        isNext: isNextSlide(index),
        isActive: isActiveSlide(index),
        isPrev: isPrevSlide(index),
        classes: slideClasses(classes.dot, index),
      };
    });
  });

  const defineSlides = (data: Slide[]): void => {
    currentSlides.value = data;
  };

  const setNext = (
    current: number = settings.active + 1,
    force = false
  ): void => {
    if (settings.paused && !force) return;

    // Active
    let active = current;

    if (active == slides.value.length) {
      active = 0;
    }

    if (active < 0) {
      active = slides.value.length - 1;
    }

    // Prev
    let prev = active - 1;
    if (prev < 0) {
      prev = slides.value.length - 1;
    }

    // Next
    let next = active + 1;
    if (next == slides.value.length) {
      next = 0;
    }

    settings.active = active;
    settings.prev = prev;
    settings.next = next;
  };

  const startSlider = (): void => {
    settings.playing = true;
    settings.interval = setInterval(() => {
      setNext();
    }, 3000);
  };

  const stopSlider = (): void => {
    settings.playing = false;
    clearInterval(settings.interval);
  };

  const pauseSlider = (): void => {
    settings.paused = true;
  };

  const goToSlide = (slideNumber: number): void => {
    setNext(slideNumber);
  };

  const nextSlide = (): void => {
    pauseSlider();
    setNext(settings.active + 1, true);
  };
  const prevSlide = (): void => {
    pauseSlider();
    setNext(settings.active - 1, true);
  };

  return {
    slides,
    dots,
    defineSlides,
    settings,
    setSlideClasses,
    startSlider,
    stopSlider,
    goToSlide,
    nextSlide,
    prevSlide,
  };
}
