import { apiRoot, debug } from './apiroot.autogen'
var Fly = require('flyio/dist/npm/wx')

export default async (x, data, method = 'GET') => {
  var url = apiRoot + x
  var fly = createFly()
  if (method === 'GET') {
    return fly.get(url, data)
  } else {
    return fly.post(url, data)
  }
}

export const createFly = () => {
  var fly = new Fly()

  fly.interceptors.request.use((request) => {
    if (debug) {
      console.log('>>> request', request)
    }

    wx.showLoading()
    var token = wx.getStorageSync('authorization')

    if (token) {
      request.headers['authorization'] = token
    }
    return request
  })

  fly.interceptors.response.use(
    (response) => {
      if (debug) {
        console.log('<<< response', response)
      }

      wx.hideLoading()
      if (response.headers.authorization) {
        wx.setStorageSync('authorization', response.headers.authorization)
      }
      return response.data
    },
    (err) => {
      wx.hideLoading()
      if (debug) {
        console.log('!!! err', err)
      }

      // unauthorized
      if (err.response && err.response.status === 401) {
        wx.showModal({
          title: '您的权限不够',
          showCancel: false
        })
        return
      }
      // 发生网络错误后会走到这里
      console.log('网络错误', JSON.stringify(err.response) || '')
      wx.showModal({
        title: '网络错误',
        content: JSON.stringify(err.response && err.response.data) || err.message || '',
        showCancel: false
      })
    }
  )

  return fly
}
