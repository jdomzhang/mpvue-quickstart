import {getVersion} from '@/services'

export default {
  data () {
    return {
      v: '1.0.0'
    }
  },
  computed: {
    versionNumber () {
      return this.app.v || this.v
    }
  },
  async onShow () {
    var v = this.versionNumber
    if (!v) {
      var obj = await getVersion()
      v = obj.version
      this.v = v
      this.app.v = v
    }
  },
  methods: {
    versioning (obj) {
      var isObj = typeof obj === 'object'
      var jsonText = isObj ? JSON.stringify(obj) : obj
      jsonText = jsonText.replace(/.jpg/g, '.jpg?v=' + this.versionNumber)
      return isObj ? JSON.parse(jsonText) : jsonText
    }
  }
}
