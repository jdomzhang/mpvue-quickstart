<script>
import 'wx-promise-pro'
import baseCommon from '@/mixins/base.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'
import { apiRoot } from '@/services/apiroot.autogen'

export default {
  mixins: [baseCommon, authCommon, loginCommon],

  data () {
    return {
      shouldCheckToken: false
    }
  },

  async onLaunch (options) {
    this.log('apiRoot', apiRoot)

    this.saveAppOptions(options)

    // force login first time in anyway
    try { await this.doLogin() } catch (e) {}

    // check if user has agreed to use this weapp
    // if no, redirect to auth page
    let userAgreed = await this.checkUserAuth()
    if (!userAgreed) {
      wx.reLaunch({
        url: `/pages/auth/main`
      })
    }
  },

  async onShow () {
    this.log('app show...........................')
    // if app hide and show again, should check token
    if (this.shouldCheckToken) {
      await this.checkUserLogin()
    }
  },

  onHide () {
    this.log('app hide...........................')
    this.shouldCheckToken = true
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
