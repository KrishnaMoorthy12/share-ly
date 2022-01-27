export const routes: RouteDescriptor = {
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

type RouteProperties = {
  root: string;
  subRoutes: Record<string, string>;
  docs: {
    tag: string;
    description: string;
  };
};

type RouteDescriptor = Record<string, RouteProperties>;
