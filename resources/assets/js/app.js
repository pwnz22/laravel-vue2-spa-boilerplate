import router from './router'
import store from './vuex'
import localforage from 'localforage'

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'spa'
})

require('./bootstrap');

Vue.component('app', require('./components/App.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));

store.dispatch('auth/setToken').then(() => {
    store.dispatch('auth/fetchUser').catch(() => {
        store.dispatch('auth/clearAuth')
        router.replace({ name: 'login' })
    })
})

const app = new Vue({
    el: '#app',
    router,
    store
});