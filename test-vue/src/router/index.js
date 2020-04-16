import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/Test'
import GenericAbc from '@/components/GenericAbc'
import PlayerNameControler from '@/components/PlayerNameControler'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/GenericAbc',
      name: 'GenericAbc',
      component: GenericAbc
      // children: [
      //   {
      //     // /user/:id/profile がマッチした時に
      //     // UserProfile は User の <router-view> 内部で描画されます
      //     path: 'player_name_controler',
      //     component: PlayerNameControler
      //   }
      // ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/player_name_controler',
      name: 'PlayerNameControler',
      component: PlayerNameControler
    }
  ]
})
