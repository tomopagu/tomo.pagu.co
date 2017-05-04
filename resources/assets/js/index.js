
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('intro', require('./components/index/Intro.vue'));
const intro = new Vue({
    el: '#intro'
});

Vue.component('navbar', require('./components/index/Navbar.vue'));
const navbar = new Vue({
    el: '#navbar'
});

Vue.component('about', require('./components/index/About.vue'));
const about = new Vue({
    el: '#about'
});

Vue.component('recent-tweet', require('./components/index/RecentTweet.vue'));
const recentTweet = new Vue({
    el: '#recent-tweet'
});

Vue.component('recent-blog', require('./components/index/RecentBlog.vue'));
const recentBlog = new Vue({
    el: '#recent-blog'
});

Vue.component('programming', require('./components/index/programming/Index.vue'));
const programming = new Vue({
    el: '#programming'
});