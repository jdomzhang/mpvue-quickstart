export default {
  methods: {
    checkRecord (record) {
      if (!record || typeof record !== 'object') {
        return `参数类型不正确`
      }

      // if (!record.houseName) {
      //   return `楼盘名称`
      // }

      if (!record.houseArea) {
        return `请输入房屋总面积`
      }

      if (!record.houseSellingPrice) {
        return `请输入房屋总售价`
      }

      if (!record.houseBuyingPrice) {
        return `请输入房屋原购入总价`
      }

      if (record.buyerHouseValue >= 2 && `上海市,北京市,广州市,深圳市`.indexOf(record.houseCity) >= 0) {
        return `第三套或以上，已限购`
      }

      return null
    }
  }
}
