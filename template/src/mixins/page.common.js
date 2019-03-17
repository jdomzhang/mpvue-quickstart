import baseCommon from '@/mixins/base.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'
// import { apiRoot } from '@/services/apiroot.autogen'

export default {
  mixins: [baseCommon, authCommon, loginCommon],

  data () {
    return {
      pageUser: {},
      hasUserAuthorized: false,
      userLoaded: false,
      customizedSharing: false
    }
  },

  computed: {
    defaultShareImage () {
      return null
      // return this.versioning(apiRoot + '/userdata/weapp/res/city/default.jpg')
    },
    defaultShareBgImage () {
      return this.formatImageURL('/userdata/weapp/res/img/sharebg.jpg')
    }
  },

  methods: {
    async onUserLoaded (user) {
      console.log('user loaded:', user)
    },

    setPageUser (user) {
      this.pageUser = user || {}
      this.hasUserAuthorized = this.app.hasUserAuthorized || false
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

    // check if user has authorized
    if (this.app.hasUserAuthorized === undefined) {
      this.app.hasUserAuthorized = await this.checkUserAuth() === true
    }
    this.setPageUser(this.app.user)

    await this.onUserLoaded(this.app.user)
    this.userLoaded = true
  }
}
