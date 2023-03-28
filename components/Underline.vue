<template>
  <span class="underline" :class="color == 'white' ? 'white' : ''"></span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'brown',
    },
  },
}
</script>
