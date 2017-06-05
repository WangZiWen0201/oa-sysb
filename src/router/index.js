import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '../components/login/index'
import Commenter from '../components/commenter/index'
import CompleteDetail from '../components/commenter/detail/completedetail'
import UncompleteDetail from '../components/commenter/detail/uncompletedetail'

import TaskDown from '../components/taskdown/index'
<<<<<<< HEAD
import NewsMedia from '../components/newsmedia/index'
=======
import TaskDownDetail from '../components/taskdown/taskdowndetail'
import TaskDetail from '../components/taskdown/taskdetail'
import NewsMedia from '../components/newsmedia/index'
import NewsMediaDetail from '../components/newsmedia/detail'
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
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
<<<<<<< HEAD
    {path: '/newsmedia', name: 'newsmedia', component: NewsMedia},
=======
    {path: '/taskdowndetail', name: 'taskdowndetail', component: TaskDownDetail},
    {path: '/taskdetail', name: 'taskdetail', component: TaskDetail},
    {path: '/newsmedia', name: 'newsmedia', component: NewsMedia},
    {path: '/newsmediadetail', name: 'newsmediadetail', component: NewsMediaDetail},
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    {path: '/infomation', name: 'infomation', component: Infomation},
    {path: '/workremind', name: 'workremind', component: WorkRemind}
  ]
})
