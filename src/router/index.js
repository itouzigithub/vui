import Vue from 'vue'
import Router from 'vue-router'

const btn = resolve => require(['@/packages/button/example.vue'], resolve)
const hairline = resolve => require(['@/packages/hairline/example.vue'], resolve)
const ipt = resolve => require(['@/packages/input/example.vue'], resolve)
const cascade = resolve => require(['@/packages/cascade/example.vue'], resolve)
const banner = resolve => require(['@/packages/banner/example.vue'], resolve)

const increase = resolve => require(['@/components/number-increase.vue'], resolve)
const dateFormat = resolve => require(['@/components/date-format.vue'], resolve)
const numberFormat = resolve => require(['@/components/number-format.vue'], resolve)

const display = resolve => require(['@/components/catalog/display.vue'], resolve)
const reminder = resolve => require(['@/components/catalog/reminder.vue'], resolve)
const navigation = resolve => require(['@/components/catalog/navigation.vue'], resolve)
const operation = resolve => require(['@/components/catalog/operation.vue'], resolve)

const methodology = resolve => require(['@/components/architecture/methodology.vue'], resolve)
const hierarchy = resolve => require(['@/components/architecture/hierarchy.vue'], resolve)
const principle = resolve => require(['@/components/architecture/principle.vue'], resolve)

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/btn',
      name: 'btn',
      component: btn
    },
    {
      path: '/hairline',
      name: 'hairline',
      component: hairline
    },
    {
      path: '/ipt',
      name: 'ipt',
      component: ipt
    },
    {
      path: '/cascade',
      name: 'cascade',
      component: cascade
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/increase',
      name: 'increase',
      component: increase
    },
    {
      path: '/dateFormat',
      name: 'dateFormat',
      component: dateFormat
    },
    {
      path: '/numberFormat',
      name: 'numberFormat',
      component: numberFormat
    },
    {
      path: '/display',
      name: 'display',
      component: display
    },
    {
      path: '/reminder',
      name: 'reminder',
      component: reminder
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/operation',
      name: 'operation',
      component: operation
    },

    {
      path: '/methodology',
      name: 'methodology',
      component: methodology
    },
    {
      path: '/hierarchy',
      name: 'hierarchy',
      component: hierarchy
    },
    {
      path: '/principle',
      name: 'principle',
      component: principle
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
  setTimeout(function () {
    document.querySelector('article').scrollTop = 0;
  }, 0)
})

export default router