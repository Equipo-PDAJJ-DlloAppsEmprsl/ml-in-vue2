import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/personal-shop/MainView';
import Search from '@/components/search.vue';
import Detail from '@/components/detail.vue';

Vue.use(Router);

export default new Router(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '*',
                redirect: '/'
            },
            {
                path: '/',
                name: 'MainView',
                component: MainView
            },
            {
                path: '/search/:search/:offset',
                name: 'search',
                component: Search
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: Detail
            }
        ]
    }

)