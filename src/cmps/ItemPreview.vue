<template>
  <p>{{ item.vendor }}</p>
  <p>{{ item.price?.toLocaleString() + '$' }}</p>
</template>
<script>
export default {
  props: {
    item: Object
  },
  computed: {
  },
}
</script>