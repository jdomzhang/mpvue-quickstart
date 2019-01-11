<template>
  <div>
    <my-component />
  </div>
</template>

<style>
</style>

<script>
import pageCommon from '@/mixins/page.common'
import MyComponent from '@/components/my.component'
import { calculateTax } from '@/services'
import { getFullURL } from '@/utils'

export default {
  mixins: [pageCommon],
  components: {
    MyComponent
  },
  data () {
    return {
    }
  },

  onLoad (options) {
    if (options.innerpage) {
      wx.navigateTo({ url: decodeURIComponent(options.innerpage) })
    }
  },

  methods: {
    onUserLoaded (user) {
      console.log('user loaded on page:', user)
    }
  }
}
</script>
