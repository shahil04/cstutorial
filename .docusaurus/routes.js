import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cstutorial/about',
    component: ComponentCreator('/cstutorial/about', '2b8'),
    exact: true
  },
  {
    path: '/cstutorial/blog',
    component: ComponentCreator('/cstutorial/blog', '78f'),
    exact: true
  },
  {
    path: '/cstutorial/blog/2026/01/01/welcome',
    component: ComponentCreator('/cstutorial/blog/2026/01/01/welcome', '3cc'),
    exact: true
  },
  {
    path: '/cstutorial/blog/archive',
    component: ComponentCreator('/cstutorial/blog/archive', '4d8'),
    exact: true
  },
  {
    path: '/cstutorial/contact',
    component: ComponentCreator('/cstutorial/contact', '136'),
    exact: true
  },
  {
    path: '/cstutorial/privacy-policy',
    component: ComponentCreator('/cstutorial/privacy-policy', '6ed'),
    exact: true
  },
  {
    path: '/cstutorial/docs',
    component: ComponentCreator('/cstutorial/docs', '3af'),
    routes: [
      {
        path: '/cstutorial/docs/excel/demo',
        component: ComponentCreator('/cstutorial/docs/excel/demo', '08d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/demo',
        component: ComponentCreator('/cstutorial/docs/python/demo', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/functions',
        component: ComponentCreator('/cstutorial/docs/python/functions', '513'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/intro',
        component: ComponentCreator('/cstutorial/docs/python/intro', '009'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/loops',
        component: ComponentCreator('/cstutorial/docs/python/loops', 'c85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/python_list',
        component: ComponentCreator('/cstutorial/docs/python/python_list', 'd5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/python/variables',
        component: ComponentCreator('/cstutorial/docs/python/variables', 'ca0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/sql/basics',
        component: ComponentCreator('/cstutorial/docs/sql/basics', '3b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/sql/joins',
        component: ComponentCreator('/cstutorial/docs/sql/joins', 'cde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cstutorial/docs/sql/select',
        component: ComponentCreator('/cstutorial/docs/sql/select', '88b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
