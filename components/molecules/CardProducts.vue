<template>
  <div class="wrapper-card max-w-sm mt-8" :style="varCSS">
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

    <div class="border-inherit p-6 rounded-b-lg main-content rounded-t-3xl">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProducts",
  props: {
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

.main-content {
  background-color: #f11075;
  margin-top: -40px;
}
</style>
