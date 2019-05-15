import { build as api } from './builder'

export const joinUser = api('user/register/email')
export const authUserByEmail = api('auth/user/email')
export const authAdminByUsername = api('auth/admin/username')
export const authRootToggle = api('auth/root/toggle')

export const checkToken = api('auth/token/check')

export const cartGet = api('cart/get')
export const cartAdd = api('cart/add')
export const cartOrder = api('cart/order')
export const cartUpdate = api('cart/update')
export const cartDelete = api('cart/delete')

export const orderUserSearch = api('order/user/search')
export const orderAdminSearch = api('order/admin/search')
export const orderPosting = api('order/post')
export const orderDelete = api('order/delete')
export const orderInbound = api('order/inbound')

export const getFees = api('fees/all')
export const updateFeePoints = api('fees/points/update')
export const getFeeLogs = api('fees/logs/search')

export const getUserPersonal = api('user/personal/get')
export const updateUserPersonal = api('user/personal/update')
export const getUsers = api('admin/users/search')

export const getUserTitle = api('user/title/get')
export const getUserPointLogs = api('user/points/logs/search')
