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

  async onPullDownRefresh () {
    await this.fetchData()
    wx.stopPullDownRefresh()
  },

  async onReachBottom () {
    console.log('reach bottom')
  },

  methods: {
    async onUserLoaded (user) {
      console.log('user loaded on page:', user)
      await this.fetchData()
    },

    async fetchData () {
    }
  }
}
</script>
