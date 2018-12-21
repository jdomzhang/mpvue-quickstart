import { apiRoot, debug } from '@/services/apiroot.autogen'

export default {
  data () {
    return {
      apiRoot: apiRoot
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
