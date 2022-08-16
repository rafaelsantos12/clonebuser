<template>
  <div class="wrapper-card max-w-sm m-auto mt-8" :style="varCSS">
    <div class="top-card rounded-t-md p-6 pt-16">
      <AtomsTitle tag="h5" :color="colorTitle" fontSize="18px" class="mb-2">{{
        topTitle
      }}</AtomsTitle>
      <AtomsTitle
        tag="h3"
        :color="colorTitle"
        :fontSize="fontSize"
        fontWeight="700"
        >{{ cityTitle }}
      </AtomsTitle>
    </div>

    <div class="border border-inherit p-6">
      <div class="flex head-card justify-between">
        <AtomsTitle tag="h5" fontSize="14px" fontWeight="600">
          Saindo de
        </AtomsTitle>
        <AtomsTitle tag="h5" fontSize="14px" fontWeight="600">
          Preço a partir de
        </AtomsTitle>
      </div>
      <hr width="100%" class="center mt-3 m-auto" />

      <slot name="content" />

      <hr width="95%" class="center mt-3 m-auto" />
      <div class="footer-card mt-6">
        <AtomsInternalLink
          href="/"
          color="#f11075"
          fontSize="14px"
          fontWeight="700"
          hoverColor="#f11075"
        >
          Ver todos ônibus para {{ cityTitle }}
        </AtomsInternalLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    topTitle: {
      type: String,
      default: "",
    },
    cityTitle: {
      type: String,
      default: "",
    },
    colorTitle: {
      type: String,
      default: "#333",
    },
    fontSize: {
      type: String,
      default: "18px",
    },
    bgImage: {
      type: String,
      default: "",
    },
  },
  computed: {
    varCSS() {
      return {
        "--bgImage": this.bgImage,
      };
    },
  },
};
</script>
<style>
.top-card {
  background-image: linear-gradient(180deg, transparent, #000),
    url("/images/campinas-sp.jpg");

  background-size: cover;
  background-position: 30%;
  height: 150px;
}
</style>
