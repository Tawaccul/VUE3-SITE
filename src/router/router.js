import MainPage from '@/pages/MainPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import {createRouter, createWebHistory} from 'vue-router'
import UserPage from '@/pages/UserPage'
import PostIdPage from '@/components/PostIdPage'
import PostPagesWithStore from '@/pages/PostPagesWithStore'

const routes= [
    {
        path:'/',
        component: MainPage
    },
    {
        path:'/posts',
        component: UserPage
    },
    {
        path:'/about',
        component: AboutPage
    },
    {
        path:'/posts/:id',
        component: PostIdPage
    },
    {
        path:'/store',
        component: PostPagesWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;