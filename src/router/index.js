import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Stories from 'pages/Stories'
import Whats from 'pages/Whats'
import Signin from 'pages/Signin'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/stories',
    component: Stories
  },
  {
    path: '/whats',
    component: Whats
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Signin',
    component: Signin
  }
]

export default new Router({
  routes
})
