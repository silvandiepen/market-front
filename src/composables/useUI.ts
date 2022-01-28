import { ref, onMounted } from "vue";

export const useInview = (el: Element | null = null) => {
  const isInview = ref<boolean>(false);

  const element = ref<Element | null>(el);

  const setInviewElement = (el: Element | null) => {
    element.value = el;
  };

  const isElementVisible = () => {
    if (element.value) {
      const { top, bottom } = element.value.getBoundingClientRect();
      const vHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return (top > 0 || bottom > 0) && top < vHeight;
    } else return false;
  };

  onMounted(() => {
    let ticking = false;

    document.addEventListener("scroll", function (e) {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const visible = isElementVisible();
          if (isInview.value !== visible) isInview.value = visible;
          ticking = false;
        });
        ticking = true;
      }
    });
  });

  return { setInviewElement, isInview };
};

interface UseOnTopOptions {
  treshhold?: number;
}

export const useScroll = (options: UseOnTopOptions = {}) => {
  const isOnTop = ref<boolean>(true);
  const isGoingDown = ref<boolean>(true);
  const scrollPosition = ref<number>(0);

  const savedScroll = ref<number>(0);

  const setOnTop = () => {
    isOnTop.value = scrollPosition.value < (options.treshhold || 1);
  };

  const setIsGoingDown = () => {
    isGoingDown.value = scrollPosition.value > savedScroll.value;
    savedScroll.value = scrollPosition.value;
  };

  onMounted(() => {
    setOnTop();

    let ticking = false;

    document.addEventListener("scroll", function (e) {
      scrollPosition.value = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setOnTop();
          setIsGoingDown();
          ticking = false;
        });
        ticking = true;
      }
    });
  });

  return {
    isOnTop,
    scrollPosition,
    isGoingDown,
  };
};
