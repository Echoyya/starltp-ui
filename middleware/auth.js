import utils from '../utils/utils'

export default function ({ isClient, store, redirect }) {
  if (isClient) {
    const info = utils.getSession('_info')
    if (info) {
      store.commit('SET_BASEINFO', { ...info })
    } else {
      return redirect('/m/mine/login')
    }
  }
}
