<template>
  <div v-if="value">
    <div
      @click="$emit('input', false)"
      class="fixed z-50 inset-0 flex items-center justify-center"
    >
      <div @click.stop class="relative">
        <slot></slot>
      </div>
    </div>
    <div class="fixed inset-0 bg-black/30 z-40 overflow-auto"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style></style>
