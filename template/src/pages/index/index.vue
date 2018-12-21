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

  async beforeMount () {
    if (!this.app.user) {
      this.log('user is not available yet.............................................................')
    }
    this.log('user', this.app.user)
  }
}
</script>
