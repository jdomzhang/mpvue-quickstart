import { apiRoot, debug } from '@/services/apiroot.autogen'

export default {
  data () {
    return {
      apiRoot: apiRoot
    }
  },

  computed: {
    globalData () {
      return getApp().globalData
    }
  },

  methods: {
    log () {
      if (debug) {
        console.log.apply(null, arguments)
      }
    }
  }
}
