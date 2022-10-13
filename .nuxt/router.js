import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45214c5e = () => interopDefault(import('..\\pages\\adminpage.vue' /* webpackChunkName: "pages/adminpage" */))
const _7eaebe10 = () => interopDefault(import('..\\pages\\cv.vue' /* webpackChunkName: "pages/cv" */))
const _03d8be26 = () => interopDefault(import('..\\pages\\cv_homepage.vue' /* webpackChunkName: "pages/cv_homepage" */))
const _09fb6ee7 = () => interopDefault(import('..\\pages\\edit.vue' /* webpackChunkName: "pages/edit" */))
const _30beafd6 = () => interopDefault(import('..\\pages\\filter.vue' /* webpackChunkName: "pages/filter" */))
const _b295d76a = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages/homepage" */))
const _40d1cadc = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _9a2f1290 = () => interopDefault(import('..\\pages\\manu.vue' /* webpackChunkName: "pages/manu" */))
const _47d1df00 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _221bfc2c = () => interopDefault(import('..\\pages\\template1.vue' /* webpackChunkName: "pages/template1" */))
const _21ffcd2a = () => interopDefault(import('..\\pages\\template2.vue' /* webpackChunkName: "pages/template2" */))
const _21e39e28 = () => interopDefault(import('..\\pages\\template3.vue' /* webpackChunkName: "pages/template3" */))
const _21c76f26 = () => interopDefault(import('..\\pages\\template4.vue' /* webpackChunkName: "pages/template4" */))
const _21ab4024 = () => interopDefault(import('..\\pages\\template5.vue' /* webpackChunkName: "pages/template5" */))
const _218f1122 = () => interopDefault(import('..\\pages\\template6.vue' /* webpackChunkName: "pages/template6" */))
const _cac7b7b0 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _38b425e2 = () => interopDefault(import('..\\pages\\documents\\cvform.vue' /* webpackChunkName: "pages/documents/cvform" */))
const _43994ce9 = () => interopDefault(import('..\\pages\\documents\\name_card.vue' /* webpackChunkName: "pages/documents/name_card" */))
const _35c79e3e = () => interopDefault(import('..\\pages\\documents\\taxes.vue' /* webpackChunkName: "pages/documents/taxes" */))
const _752b93c5 = () => interopDefault(import('..\\pages\\documents\\travel.vue' /* webpackChunkName: "pages/documents/travel" */))
const _e2a57eac = () => interopDefault(import('..\\pages\\events\\networking.vue' /* webpackChunkName: "pages/events/networking" */))
const _5a11ad56 = () => interopDefault(import('..\\pages\\events\\weddings.vue' /* webpackChunkName: "pages/events/weddings" */))
const _78b42dd6 = () => interopDefault(import('..\\pages\\guides\\documentation.vue' /* webpackChunkName: "pages/guides/documentation" */))
const _115e87cb = () => interopDefault(import('..\\pages\\messages\\archived.vue' /* webpackChunkName: "pages/messages/archived" */))
const _1d8f0179 = () => interopDefault(import('..\\pages\\messages\\unbox.vue' /* webpackChunkName: "pages/messages/unbox" */))
const _46031550 = () => interopDefault(import('..\\pages\\messages\\unread.vue' /* webpackChunkName: "pages/messages/unread" */))
const _62138924 = () => interopDefault(import('..\\pages\\pictures\\anniversary.vue' /* webpackChunkName: "pages/pictures/anniversary" */))
const _2de40420 = () => interopDefault(import('..\\pages\\pictures\\university.vue' /* webpackChunkName: "pages/pictures/university" */))
const _52f25b94 = () => interopDefault(import('..\\pages\\pictures\\vacations.vue' /* webpackChunkName: "pages/pictures/vacations" */))
const _27f8fca0 = () => interopDefault(import('..\\pages\\statistics\\call-stats.vue' /* webpackChunkName: "pages/statistics/call-stats" */))
const _911f72ce = () => interopDefault(import('..\\pages\\statistics\\finances.vue' /* webpackChunkName: "pages/statistics/finances" */))
const _1edbec72 = () => interopDefault(import('..\\pages\\statistics\\trip-logs.vue' /* webpackChunkName: "pages/statistics/trip-logs" */))
const _772a27c5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminpage",
    component: _45214c5e,
    name: "adminpage"
  }, {
    path: "/cv",
    component: _7eaebe10,
    name: "cv"
  }, {
    path: "/cv_homepage",
    component: _03d8be26,
    name: "cv_homepage"
  }, {
    path: "/edit",
    component: _09fb6ee7,
    name: "edit"
  }, {
    path: "/filter",
    component: _30beafd6,
    name: "filter"
  }, {
    path: "/homepage",
    component: _b295d76a,
    name: "homepage"
  }, {
    path: "/login",
    component: _40d1cadc,
    name: "login"
  }, {
    path: "/manu",
    component: _9a2f1290,
    name: "manu"
  }, {
    path: "/register",
    component: _47d1df00,
    name: "register"
  }, {
    path: "/template1",
    component: _221bfc2c,
    name: "template1"
  }, {
    path: "/template2",
    component: _21ffcd2a,
    name: "template2"
  }, {
    path: "/template3",
    component: _21e39e28,
    name: "template3"
  }, {
    path: "/template4",
    component: _21c76f26,
    name: "template4"
  }, {
    path: "/template5",
    component: _21ab4024,
    name: "template5"
  }, {
    path: "/template6",
    component: _218f1122,
    name: "template6"
  }, {
    path: "/user",
    component: _cac7b7b0,
    name: "user"
  }, {
    path: "/documents/cvform",
    component: _38b425e2,
    name: "documents-cvform"
  }, {
    path: "/documents/name_card",
    component: _43994ce9,
    name: "documents-name_card"
  }, {
    path: "/documents/taxes",
    component: _35c79e3e,
    name: "documents-taxes"
  }, {
    path: "/documents/travel",
    component: _752b93c5,
    name: "documents-travel"
  }, {
    path: "/events/networking",
    component: _e2a57eac,
    name: "events-networking"
  }, {
    path: "/events/weddings",
    component: _5a11ad56,
    name: "events-weddings"
  }, {
    path: "/guides/documentation",
    component: _78b42dd6,
    name: "guides-documentation"
  }, {
    path: "/messages/archived",
    component: _115e87cb,
    name: "messages-archived"
  }, {
    path: "/messages/unbox",
    component: _1d8f0179,
    name: "messages-unbox"
  }, {
    path: "/messages/unread",
    component: _46031550,
    name: "messages-unread"
  }, {
    path: "/pictures/anniversary",
    component: _62138924,
    name: "pictures-anniversary"
  }, {
    path: "/pictures/university",
    component: _2de40420,
    name: "pictures-university"
  }, {
    path: "/pictures/vacations",
    component: _52f25b94,
    name: "pictures-vacations"
  }, {
    path: "/statistics/call-stats",
    component: _27f8fca0,
    name: "statistics-call-stats"
  }, {
    path: "/statistics/finances",
    component: _911f72ce,
    name: "statistics-finances"
  }, {
    path: "/statistics/trip-logs",
    component: _1edbec72,
    name: "statistics-trip-logs"
  }, {
    path: "/",
    component: _772a27c5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
