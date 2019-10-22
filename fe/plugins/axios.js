export default ({ app, $axios, redirect, store, route, $nuxt }) => {
    $axios.onRequest(config => {
        if (process.env.NODE_ENV == 'development') {
            config.baseURL = '//starltp-api-dev.startimes.me'
        } else {
            config.baseURL = '//' + location.hostname.replace('ui', 'api')
        }
        // TODO token
        if(config.withCredentials){
            config.headers.Authorization = 'Bearer ' + 'asdf2q3gea'
        }
    })

    // $axios.onError(error => {
    //     const code = parseInt(error.response && error.response.status)
    //     if (code === 401) {
    //         if (store.state.appType > 0) {
    //             store.commit('SET_NEED_LOGIN', true)
    //         } else {
    //             redirect('/hybrid/account/login?pre=' + encodeURIComponent(route.fullPath))
    //         }
    //     }
    // })
}
