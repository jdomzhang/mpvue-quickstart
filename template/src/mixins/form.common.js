import {StoreWechatFormID} from '@/services'

export default {
  methods: {
    formSubmit (e) {
      if (e && e.mp && e.mp.detail) {
        var formID = e.mp.detail.formId
        if (formID.indexOf(' ') === -1) {
          // don't await, no necessary
          // before this page will navigate away soon
          StoreWechatFormID(formID)
        }
      }
    }
  }
}
