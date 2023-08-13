<template>
  <section>
    <AppHeader />
    <RouterView/>
  </section>
</template>

<script>


import { store } from './store/store'

import AppHeader from './cmps/AppHeader.vue'


export default {

  created() {
  },
  components: {
    AppHeader,
  },
}
</script>