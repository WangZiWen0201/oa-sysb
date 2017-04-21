import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '../components/login/index'
import Commenter from '../components/commenter/index'
import CompleteDetail from '../components/commenter/detail/completedetail'
import UncompleteDetail from '../components/commenter/detail/uncompletedetail'

import TaskDown from '../components/taskdown/index'
import NewsMedia from '../components/newsmedia/index'
import Infomation from '../components/infomation/index'
import WorkRemind from '../components/workremind/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Index},
    {path: '/login', name: 'login', component: Login},
    {path: '/commenter', name: 'commenter', component: Commenter},
    {path: '/completedetail', name: 'completedetail', component: CompleteDetail},
    {path: '/uncompletedetail', name: 'uncompletedetail', component: UncompleteDetail},
    {path: '/taskdown', name: 'taskdown', component: TaskDown},
    {path: '/newsmedia', name: 'newsmedia', component: NewsMedia},
    {path: '/infomation', name: 'infomation', component: Infomation},
    {path: '/workremind', name: 'workremind', component: WorkRemind}
  ]
})
