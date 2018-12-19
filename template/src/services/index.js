import fetch from './fetch'

export const getVersion = async () => fetch(`/userdata/weapp/res/version.json`)

export const sayHello = async () => fetch(`/api/v1/hello`)
