import { Layout } from './layout.js';
import { PageA } from './pageA.js';
import { PageB } from './pageB.js';
import { PageC } from './pageC.js';

export const routes = [
  {
    path: '/',
    async action({ next }) {
      const page = await next();
      if (page !== undefined) {
        return React.createElement(
          Layout,
          { title: page.title },
          page.component,
        );
      }
    },
    children: [
      {
        path: '/a',
        action(context) {
          return {
            context,
            title: 'Title A',
            component: React.createElement(PageA, null),
          };
        },
      },
      {
        path: '/b',
        action(context) {
          return {
            context,
            title: 'Title B',
            component: React.createElement(PageB, null),
          };
        },
      },
      {
        path: '/c',
        action(context) {
          return {
            context,
            title: 'Title C',
            component: React.createElement(PageC, null),
          };
        },
      },
    ],
  },
];
