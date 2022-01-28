<template>
  <section id="panel" class="ui-panel">
    <div class="ui-panel__container">
      <div class="row">
        <div class="column">
          <div class="content">
            <h3>Woohoo</h3>
            <p>
              Fusce quis est eget nisi vestibulum feugiat in ut elit. Integer
              bibendum vulputate urna, ac tristique urna ornare id. Etiam vitae
              imperdiet felis, eu consequat libero. Vestibulum arcu metus,
              luctus et ullamcorper eu, vulputate quis leo. Mauris convallis
              mattis sollicitudin. Vestibulum dictum congue est at mollis. Etiam
              egestas bibendum pharetra. Duis eu elit at leo ornare pharetra nec
              feugiat nibh. Nullam sodales efficitur leo eu interdum. Cras ut
              ultrices orci. In hac habitasse platea dictumst. Nulla facilisi.
              Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.
              Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc
              auctor malesuada.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h3>Yeahhh</h3>
            <p>
              Fusce quis est eget nisi vestibulum feugiat in ut elit. Integer
              bibendum vulputate urna, ac tristique urna ornare id. Etiam vitae
              imperdiet felis, eu consequat libero. Vestibulum arcu metus,
              luctus et ullamcorper eu, vulputate quis leo. Mauris convallis
              mattis sollicitudin. Vestibulum dictum congue est at mollis. Etiam
              egestas bibendum pharetra. Duis eu elit at leo ornare pharetra nec
              feugiat nibh. Nullam sodales efficitur leo eu interdum. Cras ut
              ultrices orci. In hac habitasse platea dictumst. Nulla facilisi.
              Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.
              Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc
              auctor malesuada.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h3>Go Go Go!</h3>
            <p>
              Fusce quis est eget nisi vestibulum feugiat in ut elit. Integer
              bibendum vulputate urna, ac tristique urna ornare id. Etiam vitae
              imperdiet felis, eu consequat libero. Vestibulum arcu metus,
              luctus et ullamcorper eu, vulputate quis leo. Mauris convallis
              mattis sollicitudin. Vestibulum dictum congue est at mollis. Etiam
              egestas bibendum pharetra. Duis eu elit at leo ornare pharetra nec
              feugiat nibh. Nullam sodales efficitur leo eu interdum. Cras ut
              ultrices orci. In hac habitasse platea dictumst. Nulla facilisi.
              Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.
              Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc
              auctor malesuada.
            </p>
          </div>
        </div>
      </div>
    </div>
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
.ui-panel {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--container-width);
    margin: auto;

    padding: var(--space) 0;
  }

  .row {
    display: flex;
  }
  .column {
    padding: calc(var(--space) / 2);
  }
}
</style>