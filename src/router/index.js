import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectPetFood from '../views/project/ProjectPetFood'
import ProjectSafeCheck from '../views/project/ProjectSafeCheck'
import ProjectLocalFood from '../views/project/ProjectLocalFood'
import ProjectPatent from '../views/project/ProjectPatent'
import ProjectInterior from '../views/project/ProjectInterior'
import ProjectEmotion from '../views/project/ProjectEmotion'
import ProjectDelivery from '../views/project/ProjectDelivery'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/petfood',
    name: 'petfood',
    component: ProjectPetFood

  },
  {
    path: '/safecheck',
    name: 'safecheck',
    component: ProjectSafeCheck

  },
  {
    path: '/localfood',
    name: 'localfood',
    component: ProjectLocalFood

  },
  {
    path: '/patent',
    name: 'patent',
    component: ProjectPatent

  },
  {
    path: '/interior',
    name: 'interior',
    component: ProjectInterior

  },
  {
    path: '/emotion',
    name: 'emotion',
    component: ProjectEmotion

  },
  {
    path: '/delivery',
    name: 'delivery',
    component: ProjectDelivery

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
