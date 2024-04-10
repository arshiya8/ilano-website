import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/Play.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/eBay',
      name: 'eBay',
      component: () => import('../views/advertising/eBay.vue')
    },
    {
      path: '/gym',
      name: 'gym',
      component: () => import('../views/advertising/Gym.vue')
    },
    {
      path: '/heineken',
      name: 'heineken',
      component: () => import('../views/Heineken.vue')
    },
    {
      path: '/escape',
      name: 'escape',
      component: () => import('../views/Escape.vue')
    },
    {
      path: '/adMain',
      name: 'adMain',
      component: () => import('../views/advertising/AdMain.vue')
    },
    {
      path: '/printMain',
      name: 'printMain',
      component: () => import('../views/print/PrintMain.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the hash exists in the URL, scroll to the hash
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    // Otherwise, scroll to top
    return { top: 0, behavior: 'smooth' };
  },
})

export default router
