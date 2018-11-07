import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/index'
import Rankings from '@/views/rankings/index'
import RankingsRank from '@/views/rankings/rank'
import Search from '@/views/search/index'
import Singer from '@/views/singer/index'
import SingerSing from '@/views/singer/sing'
import RecommendDetail from '@/views/recommend/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/recommend"
    },
    {
      path:"/rankings",
      component:Rankings,
      children:[
        {
          path:'/rankings/:id',
          component:RankingsRank
        }
      ]
    },
    {
      path:"/recommend",
      component:Recommend,
      children:[
        {
          path:'/recommend/:id',
          component:RecommendDetail
        }
      ]
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/singer",
      component:Singer,
      children:[
        {
          path:"/Singer/:id",
          component:SingerSing
        }
      ]
    }
  ]
})
