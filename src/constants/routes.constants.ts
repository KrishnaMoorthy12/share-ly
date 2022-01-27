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
};
