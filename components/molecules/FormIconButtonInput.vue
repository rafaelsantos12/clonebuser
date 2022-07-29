<template>
  <div>
    <span class="text-sm font-semibold font-medium">
      {{ label }}
    </span>
    <div class="input-content flex">
      <AtomsInput
        :type="type"
        :width="width"
        inputPadding="10px 10px 10px 30px"
        :height="height"
        :placeholder="placeholder"
        class="input"
      />
      <AtomsIcon
        :iconName="iconName"
        class="absolute mt-3 ml-3"
        size="16px"
        color="#c1c1c1"
      />
      <AtomsButtonCustom
        width="30px"
        height="40px"
        bgColor="transparent"
        hoverBgColor="transparent"
        borderColor="transparent"
      >
        <AtomsIcon
          :iconName="iconButtonName"
          size="16px"
          color="#0277bd"
          hoverColor="#0741b3"
          class="py-3"
        />
      </AtomsButtonCustom>
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
      default: null,
    },
    iconButtonName: {
      type: String,
      default: null,
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
<style scope>
.input-content {
  width: fit-content;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  padding-right: 7px;
}

.input-content:focus,
.input-content:focus-visible {
  border-color: #35befd;
}

input[type="text"]:focus,
input[type="text"]:focus-visible {
  border-color: #fff;
}
</style>
