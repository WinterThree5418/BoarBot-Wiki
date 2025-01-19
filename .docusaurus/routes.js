import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '00e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '001'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'e49'),
            routes: [
              {
                path: '/basics/daily',
                component: ComponentCreator('/basics/daily', '1bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/boars/common/normal',
                component: ComponentCreator('/boars/common/normal', '2e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/boars/rarities',
                component: ComponentCreator('/boars/rarities', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/boars',
                component: ComponentCreator('/category/boars', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/common-boars',
                component: ComponentCreator('/category/common-boars', 'c10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/the-basics',
                component: ComponentCreator('/category/the-basics', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/example',
                component: ComponentCreator('/example', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
