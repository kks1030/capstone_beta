export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'users',
      displayName: 'menu.users',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'project',
      displayName: 'menu.projects',
      meta: {
        icon: 'folder_shared',
      },
      children: [
        {
          name: 'project-management',
          displayName: 'menu.project-management',
        },
        {
          name: 'project-progress',
          displayName: 'menu.project-progress',
        },
      ],
    },
    {
      name: 'worker-management',
      displayName: 'menu.worker-management',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'work-verification',
      displayName: 'menu.work-verification',
      meta: {
        icon: 'check_circle',
      },
      children: [
        {
          name: 'data-view',
          displayName: 'menu.data-view',
        },
        {
          name: 'translation',
          displayName: 'menu.translation',
        },
        {
          name: 'proofreading',
          displayName: 'menu.proofreading',
        },
        {
          name: 'final-review',
          displayName: 'menu.final-review',
        },
      ],
    },
    {
      name: 'payments',
      displayName: 'menu.payments',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'payment-methods',
          displayName: 'menu.payment-methods',
        },
        {
          name: 'pricing-plans',
          displayName: 'menu.pricing-plans',
        },
        {
          name: 'billing',
          displayName: 'menu.billing',
        },
      ],
    },
    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
      ],
    },

    {
      name: 'faq',
      displayName: 'menu.faq',
      meta: {
        icon: 'quiz',
      },
    },
    {
      name: '404',
      displayName: 'menu.404',
      meta: {
        icon: 'vuestic-iconset-files',
      },
    },
    {
      name: 'preferences',
      displayName: 'menu.preferences',
      meta: {
        icon: 'manage_accounts',
      },
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      meta: {
        icon: 'settings',
      },
    },
  ] as INavigationRoute[],
}
