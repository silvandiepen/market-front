<template>
  <section
    :id="identifier"
    class="ui-panel"
    :class="`ui-panel--${visible ? 'visible' : 'hidden'}`"
  >
    <div class="ui-panel__container">
      <div class="row" :class="`row--${inlineColumns}`">
        <div class="column" v-for="(column, index) in columns" :key="index">
          <div class="content">
            <UIImage v-if="column.image" :src="column.image" />
            <h3>{{ column.title }}</h3>
            <p>{{ column.description }}</p>
            <UIButton v-if="column.action" :link="column.action.link">{{
              column.action.label
            }}</UIButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, watch, onMounted, ref, PropType } from "vue";
import { useInview } from "../../composables/useUI";
import { PanelColumn } from "./UIPanel.model";
import UIButton from "../UIButton.vue";
import UIImage from "../UIImage.vue";

export default defineComponent({
  components: {
    UIButton,
    UIImage,
  },
  props: {
    columns: {
      type: Array as PropType<PanelColumn[]>,
      default: () => [],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { isInview, setInviewElement } = useInview();
    const visible = ref(false);
    const identifier = `panel-${Math.ceil(Math.random() * 1000)}`;

    onMounted(() => {
      setInviewElement(document.querySelector(`#${identifier}`));
    });

    watch(
      () => isInview.value,
      () => {
        visible.value = isInview.value;
      }
    );

    const inlineColumns = ref(props.count);
    const cc = props.columns.length;

    if (!props.count) {
      switch (true) {
        case cc == 1:
          inlineColumns.value = 1;
          break;
        case cc == 2:
          inlineColumns.value = 2;
          break;
        case [3, 5, 6, 9, 12].includes(cc):
          inlineColumns.value = 3;
          break;
        case cc == 4:
        case cc > 6:
          inlineColumns.value = 4;
          break;
      }
    }
    return {
      inlineColumns,
      identifier,
      visible,
    };
  },
});
</script>
<style lang="scss">
.ui-panel {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--container-width);
    margin: auto;
    @media screen and (min-width: getConfig(max-width)) {
      padding: var(--space) 0;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media screen and (max-width: getConfig("max-width")) {
      flex-direction: column;
    }
    @media screen and (min-width: getConfig("max-width")) {
      &--1 .column {
        width: 100%;
      }
      &--2 .column {
        width: 50%;
      }
      &--3 .column {
        width: 33.33%;
      }
      &--4 .column {
        width: 25%;
      }
    }
  }
  .column {
    padding: var(--half-space);
    opacity: 0;
    transform: translateY(var(--space));
    @for $i from 1 through 9 {
      &:nth-child(#{$i}) {
        transition: transform 0.3s calc(0.1s * #{$i}) ease-in-out,
          opacity 0.3s calc(0.1s * #{$i}) ease-in-out;
      }
    }
  }

  &--visible {
    .column {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
