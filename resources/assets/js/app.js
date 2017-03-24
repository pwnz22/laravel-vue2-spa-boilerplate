import router from './router'

require('./bootstrap');

Vue.component('app', require('./components/App.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));

const app = new Vue({
    el: '#app',
    router
});