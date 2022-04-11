<template>
  <div>
    <codemirror
      ref="codemirror"
      style="height: calc(100vh - 80px)"
      :options="{ ...cmOptions, theme: computedTheme }"
      :value="code"
      @input="onCmCodeChange"
    ></codemirror>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      default: "monokai",
      type: String,
    },
    mode: {
      default: null,
      required: true,
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
  },
  computed: {
    computedTheme() {
      return this.theme || "material";
    },
  },
  data() {
    return {
      code: "",
      cmOptions: {
        mode: this.mode,
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      },
    };
  },
  mounted() {
    this.code = this.text;
  },
  methods: {
    onCmCodeChange(value) {
      this.code = value;
      setTimeout(() => {
        this.$emit("updateInput", value);
      }, 1050);
    },
  },
};
</script>

<style></style>
