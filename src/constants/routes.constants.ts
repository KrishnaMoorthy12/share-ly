export const routes = {
  user: {
    root: '/user',
    subRoutes: {
      create: '/create',
      changeKey: '/change-key',
    },
    docs: {
      tag: 'user',
      description: 'User related routes',
    },
  },
  group: {
    root: '/group',
    subRoutes: {
      create: '/create',
    },
    docs: {
      tag: 'group',
      description: 'Routes for creating and managing groups',
    },
  },
};
