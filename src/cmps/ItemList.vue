<template>
  <ul class="item-list">
    <li v-for="item in items" :key="item._id">
      <ItemPreview :item="item" />
      <button @click="removeItem(item._id)">x</button>
      <button @click="updateItem(item)">Update</button>
    </li>
  </ul>
</template>

<script>
import ItemPreview from '../cmps/ItemPreview.vue'
export default {
  props: {
    items: Array
  },
  methods: {
    removeItem(itemId) {
      this.$emit('remove', itemId)
    },
    updateItem(item) {
      this.$emit('update', item)
    }
  },
  computed: {
  },
  components: {
    ItemPreview
  }
}
</script>