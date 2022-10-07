import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51035eab = () => interopDefault(import('..\\pages\\adminpage.vue' /* webpackChunkName: "pages/adminpage" */))
const _5319cb14 = () => interopDefault(import('..\\pages\\cv.vue' /* webpackChunkName: "pages/cv" */))
const _468c5172 = () => interopDefault(import('..\\pages\\cv_homepage.vue' /* webpackChunkName: "pages/cv_homepage" */))
const _fbcb6c66 = () => interopDefault(import('..\\pages\\edit.vue' /* webpackChunkName: "pages/edit" */))
const _59173d0a = () => interopDefault(import('..\\pages\\filter.vue' /* webpackChunkName: "pages/filter" */))
const _26ffe79e = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages/homepage" */))
const _66e36694 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2b07519e = () => interopDefault(import('..\\pages\\manu.vue' /* webpackChunkName: "pages/manu" */))
const _21e20866 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _628606c4 = () => interopDefault(import('..\\pages\\template1.vue' /* webpackChunkName: "pages/template1" */))
const _62941e45 = () => interopDefault(import('..\\pages\\template2.vue' /* webpackChunkName: "pages/template2" */))
const _62a235c6 = () => interopDefault(import('..\\pages\\template3.vue' /* webpackChunkName: "pages/template3" */))
const _62b04d47 = () => interopDefault(import('..\\pages\\template4.vue' /* webpackChunkName: "pages/template4" */))
const _62be64c8 = () => interopDefault(import('..\\pages\\template5.vue' /* webpackChunkName: "pages/template5" */))
const _62cc7c49 = () => interopDefault(import('..\\pages\\template6.vue' /* webpackChunkName: "pages/template6" */))
const _12baff0e = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _2c4ab0bc = () => interopDefault(import('..\\pages\\documents\\cvform.vue' /* webpackChunkName: "pages/documents/cvform" */))
const _413cc862 = () => interopDefault(import('..\\pages\\documents\\name_card.vue' /* webpackChunkName: "pages/documents/name_card" */))
const _4e275024 = () => interopDefault(import('..\\pages\\documents\\taxes.vue' /* webpackChunkName: "pages/documents/taxes" */))
const _68c21e9f = () => interopDefault(import('..\\pages\\documents\\travel.vue' /* webpackChunkName: "pages/documents/travel" */))
const _0de81110 = () => interopDefault(import('..\\pages\\events\\networking.vue' /* webpackChunkName: "pages/events/networking" */))
const _2952498a = () => interopDefault(import('..\\pages\\events\\weddings.vue' /* webpackChunkName: "pages/events/weddings" */))
const _55f5bbb0 = () => interopDefault(import('..\\pages\\guides\\documentation.vue' /* webpackChunkName: "pages/guides/documentation" */))
const _decd4f9e = () => interopDefault(import('..\\pages\\messages\\archived.vue' /* webpackChunkName: "pages/messages/archived" */))
const _371e7ad3 = () => interopDefault(import('..\\pages\\messages\\unbox.vue' /* webpackChunkName: "pages/messages/unbox" */))
const _1543b184 = () => interopDefault(import('..\\pages\\messages\\unread.vue' /* webpackChunkName: "pages/messages/unread" */))
const _a7906d70 = () => interopDefault(import('..\\pages\\pictures\\anniversary.vue' /* webpackChunkName: "pages/pictures/anniversary" */))
const _6ca759f4 = () => interopDefault(import('..\\pages\\pictures\\university.vue' /* webpackChunkName: "pages/pictures/university" */))
const _89dcd024 = () => interopDefault(import('..\\pages\\pictures\\vacations.vue' /* webpackChunkName: "pages/pictures/vacations" */))
const _9218a1d4 = () => interopDefault(import('..\\pages\\statistics\\call-stats.vue' /* webpackChunkName: "pages/statistics/call-stats" */))
const _5338957f = () => interopDefault(import('..\\pages\\statistics\\finances.vue' /* webpackChunkName: "pages/statistics/finances" */))
const _6458d0be = () => interopDefault(import('..\\pages\\statistics\\trip-logs.vue' /* webpackChunkName: "pages/statistics/trip-logs" */))
const _02e6a99f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _51035eab,
    name: "adminpage"
  }, {
    path: "/cv",
    component: _5319cb14,
    name: "cv"
  }, {
    path: "/cv_homepage",
    component: _468c5172,
    name: "cv_homepage"
  }, {
    path: "/edit",
    component: _fbcb6c66,
    name: "edit"
  }, {
    path: "/filter",
    component: _59173d0a,
    name: "filter"
  }, {
    path: "/homepage",
    component: _26ffe79e,
    name: "homepage"
  }, {
    path: "/login",
    component: _66e36694,
    name: "login"
  }, {
    path: "/manu",
    component: _2b07519e,
    name: "manu"
  }, {
    path: "/register",
    component: _21e20866,
    name: "register"
  }, {
    path: "/template1",
    component: _628606c4,
    name: "template1"
  }, {
    path: "/template2",
    component: _62941e45,
    name: "template2"
  }, {
    path: "/template3",
    component: _62a235c6,
    name: "template3"
  }, {
    path: "/template4",
    component: _62b04d47,
    name: "template4"
  }, {
    path: "/template5",
    component: _62be64c8,
    name: "template5"
  }, {
    path: "/template6",
    component: _62cc7c49,
    name: "template6"
  }, {
    path: "/user",
    component: _12baff0e,
    name: "user"
  }, {
    path: "/documents/cvform",
    component: _2c4ab0bc,
    name: "documents-cvform"
  }, {
    path: "/documents/name_card",
    component: _413cc862,
    name: "documents-name_card"
  }, {
    path: "/documents/taxes",
    component: _4e275024,
    name: "documents-taxes"
  }, {
    path: "/documents/travel",
    component: _68c21e9f,
    name: "documents-travel"
  }, {
    path: "/events/networking",
    component: _0de81110,
    name: "events-networking"
  }, {
    path: "/events/weddings",
    component: _2952498a,
    name: "events-weddings"
  }, {
    path: "/guides/documentation",
    component: _55f5bbb0,
    name: "guides-documentation"
  }, {
    path: "/messages/archived",
    component: _decd4f9e,
    name: "messages-archived"
  }, {
    path: "/messages/unbox",
    component: _371e7ad3,
    name: "messages-unbox"
  }, {
    path: "/messages/unread",
    component: _1543b184,
    name: "messages-unread"
  }, {
    path: "/pictures/anniversary",
    component: _a7906d70,
    name: "pictures-anniversary"
  }, {
    path: "/pictures/university",
    component: _6ca759f4,
    name: "pictures-university"
  }, {
    path: "/pictures/vacations",
    component: _89dcd024,
    name: "pictures-vacations"
  }, {
    path: "/statistics/call-stats",
    component: _9218a1d4,
    name: "statistics-call-stats"
  }, {
    path: "/statistics/finances",
    component: _5338957f,
    name: "statistics-finances"
  }, {
    path: "/statistics/trip-logs",
    component: _6458d0be,
    name: "statistics-trip-logs"
  }, {
    path: "/",
    component: _02e6a99f,
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
