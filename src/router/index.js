import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import NoticeMore from '@/pages/home/NoticeMore'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/noticeMore',
            name: 'NoticeMore',
            component: NoticeMore
        }
    ]
})