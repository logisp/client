<template>
  <span>
    {{value.substr(0, 10)}}
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
