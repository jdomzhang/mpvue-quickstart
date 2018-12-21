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

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
