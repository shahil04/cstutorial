import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tech-tutorial-site/__docusaurus/debug',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug', 'c31'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/config',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/config', 'add'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/content',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/content', '382'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/globalData',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/globalData', 'a26'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/metadata',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/metadata', 'bf0'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/registry',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/registry', '9ec'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/__docusaurus/debug/routes',
    component: ComponentCreator('/tech-tutorial-site/__docusaurus/debug/routes', 'fd8'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/about',
    component: ComponentCreator('/tech-tutorial-site/about', '1d6'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/blog',
    component: ComponentCreator('/tech-tutorial-site/blog', '5df'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/blog/2026/01/01/welcome',
    component: ComponentCreator('/tech-tutorial-site/blog/2026/01/01/welcome', '9ed'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/blog/archive',
    component: ComponentCreator('/tech-tutorial-site/blog/archive', '4c6'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/contact',
    component: ComponentCreator('/tech-tutorial-site/contact', '136'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/privacy-policy',
    component: ComponentCreator('/tech-tutorial-site/privacy-policy', 'd84'),
    exact: true
  },
  {
    path: '/tech-tutorial-site/docs',
    component: ComponentCreator('/tech-tutorial-site/docs', '87b'),
    routes: [
      {
        path: '/tech-tutorial-site/docs/excel/demo',
        component: ComponentCreator('/tech-tutorial-site/docs/excel/demo', '937'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/demo',
        component: ComponentCreator('/tech-tutorial-site/docs/python/demo', '087'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/functions',
        component: ComponentCreator('/tech-tutorial-site/docs/python/functions', 'c53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/intro',
        component: ComponentCreator('/tech-tutorial-site/docs/python/intro', '06f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/loops',
        component: ComponentCreator('/tech-tutorial-site/docs/python/loops', 'a89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/python_list',
        component: ComponentCreator('/tech-tutorial-site/docs/python/python_list', '555'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/python/variables',
        component: ComponentCreator('/tech-tutorial-site/docs/python/variables', 'c0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/sql/basics',
        component: ComponentCreator('/tech-tutorial-site/docs/sql/basics', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/sql/joins',
        component: ComponentCreator('/tech-tutorial-site/docs/sql/joins', 'b92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-tutorial-site/docs/sql/select',
        component: ComponentCreator('/tech-tutorial-site/docs/sql/select', 'f27'),
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
