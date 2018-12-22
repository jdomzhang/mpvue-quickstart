<template>
  <div>
    <div class="mx-3 elevation-1 pb-2">
      <div class="py-5 green white--text text-xs-center">
        请授权
      </div>
      <div class="my-5">
        <div class="text-xs-center">
          <open-data class="p-avatar" type="userAvatarUrl"></open-data>
        </div>
        <div class="text-xs-center my-1 grey--text text--darken-1 subheading">
          <open-data type="userNickName"></open-data>
        </div>
        <div class="mx-5 py-5">
          <button type="primary" size="large" open-type="getUserInfo" @getuserinfo="onGetUserInfo">授权</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.p-avatar {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
}
</style>

<script>
import pageCommon from '@/mixins/page.common'
import loginCommon from '@/mixins/login.common'
import { getWXUserInfo } from '@/services'
import { getFullURL } from '@/utils'

export default {
  mixins: [pageCommon, loginCommon],
  data () {
    return {
    }
  },

  methods: {
    async onGetUserInfo (event) {
      if (event.mp.detail.errMsg.indexOf(':ok') === -1) {
        this.log('you cancelled auth.')
        return
      }

      let user = await getWXUserInfo(event.mp.detail)

      // save current user to global data
      this.user = user
      this.log('get user info API result', user)
      this.log('navigating back...')

      let url = getFullURL(wx.getStorageSync('appOptions'))
      wx.reLaunch({ url })
    }
  }
}
</script>
