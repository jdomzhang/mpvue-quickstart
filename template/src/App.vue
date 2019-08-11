<script>
import 'wx-promise-pro'
import baseCommon from '@/mixins/base.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'

export default {
  mixins: [baseCommon, authCommon, loginCommon],

  async onLaunch (options) {
    this.saveAppOptions(options)
    await this.checkUserAuth()
  },

  async onShow () {
    await this.checkUserLogin()
  },

  methods: {
    saveAppOptions (options) {
      wx.setStorageSync('appOptions', options)
    }
  }
}
</script>

<style>
@import "../static/fontawesome/fontawesome-4.7.0.wxss";
@import "../static/vuetify/vuetify.min.wxss";
page {
  height: 100%;
}

</style>
