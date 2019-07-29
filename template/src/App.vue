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

  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
  },

  async onLaunch (options) {
    this.log('apiRoot', apiRoot)

    this.clearToken()

    this.saveAppOptions(options)

    // // force login first time in anyway
    // try { await this.doLogin() } catch (e) {}

    // // check if user has agreed to use this weapp
    // // if no, redirect to auth page
    // let userAgreed = await this.checkUserAuth()
    // if (!userAgreed) {
    //   wx.reLaunch({
    //     url: `/pages/auth/main`
    //   })
    // }
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
    },

    clearToken () {
      wx.removeStorageSync('authorization')
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
