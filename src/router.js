import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import Works_detail from './views/Works_detail.vue'
import News from './views/News.vue'
import News_detail from './views/News_detail.vue'
import Careers from  './views/Careers.vue'
import Careers_detail from './views/Careers_detail.vue'
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
import Services_detail from './views/Services'
Vue.use(Router)
//注册路由，首先需要导入页面
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path:'/works',
      name:'Works',
      component:Works
    },
    {
      path:'/works/works_detail',
      name:'Works_detail',
      component:Works_detail
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/news/news_detail',
      name:'News_detail',
      component:News_detail
    },
    {
      path:'/careers',
      name:'Careers',
      component:Careers
    },
    {
      path:'/careers/careers_detail',
      name:'Careers_detail',
      component:Careers_detail
    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    },
    {
      path:'/services',
      name:'Services',
      component:Services
    },
    {
      path:'/services/services_detail',
      name:'Services_detail',
      component:Services_detail
    }
  ]
})
