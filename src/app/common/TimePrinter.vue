<template>
  <span>
    {{value.substr(0, 10)}}
  </span>
</template>

<script>
export default {
  name: 'TimePrinter',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
