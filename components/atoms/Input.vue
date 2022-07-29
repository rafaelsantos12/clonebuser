<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="inputValue"
      class="input"
      :style="varCSS"
      @input="onInput($event)"
    />
  </div>
</template>
<script>
export default {
  name: "Input",
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(newValue) {
      this.inputValue = newValue;
    },
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "38px",
    },
    borderColor: {
      type: String,
      default: "#fff",
    },
    borderRadius: {
      type: String,
      default: "5px",
    },
    inputPadding: {
      type: String,
      default: "10px",
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  methods: {
    onInput(ev) {
      const value = ev.target.value;
      this.$emit("input", value);
    },
  },
  computed: {
    varCSS() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--borderColor": this.borderColor,
        "--borderRadius": this.borderRadius,
        "--inputPadding": this.inputPadding,
        "--color": this.color,
      };
    },
  },
};
</script>
<style scope>
.input {
  width: var(--width);
  height: var(--height);
  color: var(--color);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  padding: var(--inputPadding);
  outline: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
input:focus,
input:focus-visible {
  border-color: #35befd;
  box-shadow: 0px 0px 1px #35befd;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.8);
  cursor: pointer;
}
input[type="date"]::-webkit-calendar-picker-indicator:hover {
  filter: invert(0);
}

input:hover {
  background: #f5f5f5;
}
</style>
