import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ISE-Docusaurus/blog',
    component: ComponentCreator('/ISE-Docusaurus/blog', '0dd'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/archive',
    component: ComponentCreator('/ISE-Docusaurus/blog/archive', 'a4a'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/first-blog-post',
    component: ComponentCreator('/ISE-Docusaurus/blog/first-blog-post', '4c4'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/long-blog-post',
    component: ComponentCreator('/ISE-Docusaurus/blog/long-blog-post', '5f9'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/ISE-Docusaurus/blog/mdx-blog-post', '102'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/tags',
    component: ComponentCreator('/ISE-Docusaurus/blog/tags', 'fa5'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/ISE-Docusaurus/blog/tags/docusaurus', '7b8'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/tags/facebook',
    component: ComponentCreator('/ISE-Docusaurus/blog/tags/facebook', 'a0c'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/tags/hello',
    component: ComponentCreator('/ISE-Docusaurus/blog/tags/hello', '44c'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/tags/hola',
    component: ComponentCreator('/ISE-Docusaurus/blog/tags/hola', '017'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/blog/welcome',
    component: ComponentCreator('/ISE-Docusaurus/blog/welcome', 'a53'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/markdown-page',
    component: ComponentCreator('/ISE-Docusaurus/markdown-page', 'fd7'),
    exact: true
  },
  {
    path: '/ISE-Docusaurus/docs',
    component: ComponentCreator('/ISE-Docusaurus/docs', 'de6'),
    routes: [
      {
        path: '/ISE-Docusaurus/docs/category/tutorial---basics',
        component: ComponentCreator('/ISE-Docusaurus/docs/category/tutorial---basics', 'ac7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/category/tutorial---extras',
        component: ComponentCreator('/ISE-Docusaurus/docs/category/tutorial---extras', '099'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/intro',
        component: ComponentCreator('/ISE-Docusaurus/docs/intro', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/congratulations', 'f02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/create-a-blog-post', 'a2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/create-a-document', '15b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/create-a-page', 'df5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/deploy-your-site', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-basics/markdown-features', '12d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-extras/manage-docs-versions', '2fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ISE-Docusaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ISE-Docusaurus/docs/tutorial-extras/translate-your-site', '020'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ISE-Docusaurus/',
    component: ComponentCreator('/ISE-Docusaurus/', '7be'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
