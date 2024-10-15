<template>
  <style>
    ::selection {
      background: `{{ selectionColor }}`;
    }
  </style>
</template>

<script>
export default {
  props: {
    selectionColor: {
      type: String,
      required: true
    }
  }
};
</script>
