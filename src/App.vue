<script lang="ts">
import { defineComponent } from "vue";

import UIHeader from "./components/UIHeader.vue";
import UIFooter from "./components/UIFooter.vue";
import UIIntro from "./components/UIIntro.vue";
import UIPanel from "./components/Panel/UIPanel.vue";
import UISlider from "./components/Slider/UISlider.vue";
import UIContent from "./components/UIContent.vue";
import UIBanner from "./components/UIBanner.vue";
import UIQuote from "./components/UIQuote.vue";
import UIImageSection from "./components/UIImageSection.vue";
import UIImage from "./components/UIImage.vue";
import UIDescription from "./components/UIDescription.vue";

import { slides, columns1, columns2 } from "./mockData";

export default defineComponent({
  components: {
    UIHeader,
    UIFooter,
    UIIntro,
    UIPanel,
    UIBanner,
    UISlider,
    UIContent,
    UIImageSection,
    UIImage,
    UIQuote,
    UIDescription,
  },
  setup() {
    return { slides, columns1, columns2 };
  },
});
</script>

<template>
  <UIHeader />
  <main id="container">
    <UIIntro
      title="Welcome-to Storefront"
      image="https://images.unsplash.com/photo-1498747324273-943f73ca00b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3648&q=80"
    />
    <UIPanel :columns="columns2" />
    <UISlider :slides="slides" />
    <UIContent>
      <h2>A content section</h2>
      <h3>For instance for blogs, or just long content</h3>
      <p>
        Phasellus bibendum vitae massa sed ornare. Donec venenatis molestie
        lorem, eu bibendum lorem fermentum eget. Suspendisse ac fermentum ipsum.
        Suspendisse aliquet, elit a hendrerit gravida, nulla mi posuere velit,
        vitae vestibulum turpis dolor eget diam. Fusce lacinia justo augue,
        vitae lacinia arcu pellentesque sit amet. Aliquam dolor nunc, imperdiet
        sed convallis gravida, laoreet ut lacus. Aenean porta non tortor eget
        dignissim. In auctor est sed luctus sollicitudin.
      </p>
      <p>
        Nulla pharetra dolor odio, vel sagittis sem scelerisque a. Proin
        volutpat erat a nisi pharetra, id volutpat mi lobortis. Ut mattis ipsum
        eu diam congue, sed vehicula tortor convallis. Donec efficitur, turpis
        ut placerat ullamcorper, ex neque iaculis augue, aliquam vulputate nunc
        nunc at ipsum. Etiam ullamcorper odio elit, sit amet laoreet augue
        tempus at. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Suspendisse viverra lorem quis est
        dapibus, ac rhoncus ex tincidunt. Aenean ut orci iaculis, semper justo
        eu, condimentum nunc. Vestibulum vitae eros arcu.
      </p>
      <p>
        Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum
        eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit
        lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum
        non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem
        quis elit consequat fringilla a euismod erat. Aenean elit felis, laoreet
        ac ultricies et, mollis eget sem. Vivamus feugiat dui tellus, nec
        condimentum diam finibus posuere. Ut eu eros vel dui rhoncus sagittis
        non vel ex. Etiam ornare eros eget nisi imperdiet consectetur. Etiam
        augue risus, rutrum eu dolor in, eleifend tincidunt neque. Mauris odio
        est, semper id augue a, consequat malesuada risus. Aenean in dui eget mi
        scelerisque semper.
      </p>
      <h4>Sub section</h4>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a
        ante sit amet lacus ornare hendrerit. In hac habitasse platea dictumst.
        Quisque vitae ligula leo. Donec porta turpis dolor, in ultrices mi
        tincidunt at. Donec pretium vehicula risus, eget dictum turpis imperdiet
        in. Morbi sed diam mi. Phasellus luctus vehicula nunc id dignissim. Sed
        molestie lacinia sem, ac malesuada urna mollis sit amet. Proin nec lacus
        eget purus rhoncus euismod.
      </p>

      <p>
        Curabitur dignissim diam at augue venenatis viverra. Sed eget mi eu
        turpis malesuada lobortis. Pellentesque metus dolor, venenatis vel nibh
        non, volutpat imperdiet magna. Phasellus condimentum cursus tellus. Nam
        egestas justo eget nunc egestas tempor. Ut sed est massa. Suspendisse
        congue purus diam, porttitor posuere massa condimentum ac. Quisque
        lacinia ante vel commodo pulvinar.
      </p>
      <p>
        Vestibulum aliquet mi et odio rutrum, sed egestas enim vestibulum.
        Curabitur pellentesque ligula pulvinar, mattis dolor eget, mattis purus.
        In mauris nunc, porta at ex et, molestie dignissim elit. Morbi ut erat
        in magna tempus lacinia. Donec pharetra urna in maximus aliquam. Cras
        tincidunt tellus congue lacus varius, sit amet luctus ante efficitur.
        Vestibulum pretium lobortis neque sed maximus. Curabitur molestie
        feugiat nulla, id pharetra elit tincidunt ac. Duis purus odio, facilisis
        non varius non, fringilla vitae sapien. Phasellus molestie ex quis
        fringilla tincidunt. Fusce tristique quis lorem mattis mattis. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Vivamus viverra
        ante porta eros tempus, a finibus velit dapibus. Etiam id nulla id
        libero dignissim semper.
      </p>
    </UIContent>
    <UIBanner />
    <UIPanel :columns="[...columns1, ...columns1]" />
    <UIQuote style="background-color: var(--secondary)">
      <p>
        Vue Storefront is the world's fastest-growing open-source eCommerce
        frontend
      </p></UIQuote
    >
    <UIImageSection>
      <UIDescription>
        <h2>Building a website is like playing with Lego</h2>
        <p>
          Curabitur molestie feugiat nulla, id pharetra elit tincidunt ac. Duis
          purus odio, facilisis non varius non, fringilla vitae sapien.
          Phasellus molestie ex quis fringilla tincidunt. Fusce tristique quis
          lorem mattis mattis. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Vivamus viverra ante porta eros tempus, a finibus velit
          dapibus. Etiam id nulla id libero dignissim semper.
        </p>
      </UIDescription>
      <UIImage
        src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
      />
    </UIImageSection>
    <UIPanel :columns="[columns2[0], columns2[1]]" />
  </main>
  <UIFooter />
</template>

<style src="./assets/style/app.scss" lang="scss" />
