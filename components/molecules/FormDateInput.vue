<template>
  <div>
    <span class="text-sm font-semibold font-medium">
      {{ label }}
    </span>
    <div class="flex">
      <AtomsInput
        type="date"
        :width="width"
        :height="height"
        borderColor="#c1c1c1"
        :placeholder="placeholder"
        color="#9d9d9d"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FormDateInput",
  props: {
    label: {
      type: String,
      default: null,
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
