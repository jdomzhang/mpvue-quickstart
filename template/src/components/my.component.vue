<template>
  <div class="mx-2 my-2 green white--text" @click="onClickHello">
    <div class="headline">
      Hello Component
    </div>
    <div class="caption">
    API Root: {{apiRoot}}
    </div>
  </div>
</template>

<style>
</style>

<script>
import componentCommon from '@/mixins/component.common'
import { sayHello } from '@/services'

export default {
  mixins: [componentCommon],
  props: {
    value: {
      type: Object,
      deafult () {
        return {}
      }
    }
  },
  methods: {
    async onClickHello () {
      let echo = await sayHello()
      wx.showModal({ title: `${this.apiRoot}`, content: `From Server: ${echo}`, showCancel: false })
    }
  }
}
</script>
