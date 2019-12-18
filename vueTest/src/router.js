import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Login from '@/components/Login';
import Main from '@/components/Main';
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Login',     //路由名称，
      component: =Login //对应的组件模板
    },
	{
	   path:'/components',
	   name:'Main',
	   component:Main
	}
  ]
})