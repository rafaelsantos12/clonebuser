<template>
  <div>
    <span class="text-sm font-semibold font-medium">
      {{ label }}
    </span>
    <div class="flex">
      <AtomsInput
        :type="type"
        :width="width"
        inputPadding="10px 10px 10px 30px"
        :height="height"
        borderColor="#c1c1c1"
        :placeholder="placeholder"
      />
      <AtomsIcon
        :iconName="iconName"
        class="absolute mt-3 ml-3"
        size="16px"
        color="#c1c1c1"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "FormIconInput",
  props: {
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    iconName: {
      type: String,
      default: "circle",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "44px",
    },
  },
};
</script>
<style scope></style>
