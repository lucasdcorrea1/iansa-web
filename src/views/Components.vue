<template>
    <div>
      <carousel :show-frame="true" :change-storage="true"></carousel>
      <donate></donate>
      <services></services>
      <team></team>
      <partners></partners>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";
import Donate from "./components/Donate";
import Services from "./components/Services";
import Team from "./components/Team";
import Partners from "./components/Partners";

export default {
  name: "components",
  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection,
    Donate,
    Services,
    Team,
    Partners
  }
};
</script>
