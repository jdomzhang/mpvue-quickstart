import baseCommon from '@/mixins/base.common'
import verCommon from '@/mixins/ver.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'
import { apiRoot } from '@/services/apiroot.autogen'

export default {
  mixins: [baseCommon, verCommon, authCommon, loginCommon],

  data () {
    return {
      pageUser: null,
      userLoaded: false,
      customizedSharing: false
    }
  },

  computed: {
    defaultShareImage () {
      return this.versioning(apiRoot + '/userdata/weapp/res/city/default.jpg')
    }
  },

  methods: {
    onUserLoaded (user) {
      console.log('user loaded:', user)
    }
  },

  onShareAppMessage () {
    return {
      path: `/pages/index/main`,
      imageUrl: this.defaultShareImage
    }
  },

  async beforeMount () {
    await this.checkUserLogin()

    if (!this.customizedSharing) {
      wx.showShareMenu({withShareTicket: true})
    }

    this.pageUser = this.app.user
    await this.onUserLoaded(this.app.user)
    this.userLoaded = true

    // check if user has agreed to use this weapp
    // if no, redirect to auth page
    let userAgreed = await this.checkUserAuth()
    if (!userAgreed) {
      wx.reLaunch({
        url: `/pages/auth/main`
      })
    }
  }
}
