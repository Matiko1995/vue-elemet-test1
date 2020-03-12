import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
// import login from '../components/login.vue';
// import index from '../components/index.vue';

// 异步加载
const login = () => import('../components/login.vue')
const index = () => import('../components/index.vue')
const userlist = () => import('../components/userlist.vue')
const vipuser = () => import('../components/vipuser.vue')
const home = () => import('../components/home.vue')
const passwordedit = () => import('../components/passwordedit.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: userlist,
      },
      {
        path: '/vipuser',
        name: 'vipuser',
        component: vipuser,
      },
      {
        path: '/passwordedit',
        name: 'passwordedit',
        component: passwordedit,
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
