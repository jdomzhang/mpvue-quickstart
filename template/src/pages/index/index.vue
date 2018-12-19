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

  methods: {
  }
}
</script>
