<template>
  <div class="items-container">
    <ItemList :items="items"
     @remove="removeItem"
     @update="updateItem" />
  </div>

  <div class="container home">
    <form @submit.prevent="addItem()">
      <h2>Add item</h2>
      <input type="text" v-model="itemToAdd.vendor" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import ItemList from '../cmps/ItemList.vue'
// import { itemService } from '../services/item.service.local.js'
import { itemService } from '../services/item.service.js'
import { getActionRemoveitem, getActionUpdateitem } from '../store/item.store.js'
export default {
  data() {
    return {
      itemToAdd: itemService.getEmptyItem()
    }
  },
  computed: {
    items() {
      return this.$store.getters.items
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadItems' })
  },
  methods: {
    async addItem() {
      try {
        await this.$store.dispatch({ type: 'addItem', item: this.itemToAdd })
        this.itemToAdd = itemService.getEmptyItem()
      } catch (err) {
        console.log(err)
      }
    },
    async removeItem(itemId) {
      try {
        await this.$store.dispatch(getActionRemoveitem(itemId))

      } catch (err) {
        console.log(err)
      }
    },
    async updateItem(item) {
      try {
        item = { ...item }
        item.price = +prompt('New price?', item.price)
        await this.$store.dispatch(getActionUpdateitem(item))

      } catch (err) {
        console.log(err)
      }
    },
  },
  components: {
    ItemList

  }


}
</script>
