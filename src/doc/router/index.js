import Vue from 'vue'
import Router from 'vue-router'

const instruction = resolve => require(['../pages/instruction.vue'], resolve)

const btn = resolve => require(['../pages/style-button.vue'], resolve)
const hairline = resolve => require(['../pages/style-hairline.vue'], resolve)

const ipt = resolve => require(['../pages/widget-input.vue'], resolve)
const cascade = resolve => require(['../pages/widget-cascade.vue'], resolve)
const banner = resolve => require(['../pages/widget-banner.vue'], resolve)

const increase = resolve => require(['../pages/util-number-increase.vue'], resolve)
const numberFormat = resolve => require(['../pages/util-number-format.vue'], resolve)
const dateFormat = resolve => require(['../pages/util-date-format.vue'], resolve)
const roller = resolve => require(['../pages/util-roller.vue'], resolve)
const imgGenerator = resolve => require(['../pages/util-img-generator.vue'], resolve)

const display = resolve => require(['../pages/catalog/display.vue'], resolve)
const reminder = resolve => require(['../pages/catalog/reminder.vue'], resolve)
const navigation = resolve => require(['../pages/catalog/navigation.vue'], resolve)
const operation = resolve => require(['../pages/catalog/operation.vue'], resolve)

const methodology = resolve => require(['../pages/architecture/methodology.vue'], resolve)
const hierarchy = resolve => require(['../pages/architecture/hierarchy.vue'], resolve)
const principle = resolve => require(['../pages/architecture/principle.vue'], resolve)

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/instruction',
      name: 'instruction',
      component: instruction
    },
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
      path: '/roller',
      name: 'roller',
      component: roller
    },
    {
      path: '/img-generator',
      name: 'img-generator',
      component: imgGenerator
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