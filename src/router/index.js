import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// 首页
const Home = () => import('@/views/Home')

// 登录
const Signin = () => import('@/views/signin')

// 404
const NotFound = () => import('@/views/exception/404.vue')

// Upload
const Upload = () => import('@/views/upload')

Vue.use(VueRouter)

const title = '示例'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,
      title: title
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于我们 - ' + title
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: {
      title: '登录 - ' + title
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '访问错误 - ' + title
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {
      requireAuth: true,
      title: '上传文件 - ' + title
    }
  }
]

// sessionStorage操作
const session = window.localStorage

// 获取登录token
const token = session.getItem('token')
if (token) {
  store.commit('token', token)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 设置页面标题
  to.meta.title ? document.title = to.meta.title : document.title = title

  // 页面不存在进入404页面
  if (to.matched.length === 0) {
    console.log(to, from)
    next({
      name: 'NotFound',
      query: {
        redirect: from.name
      }
    })
  }

  if (to.meta.requireAuth) {
    // console.log(to)
    next()
  } else {
    next()
  }
})

export default router
