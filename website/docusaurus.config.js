/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Node JS Course',
  tagline: 'How to turn into a Javascript Hero from scratch',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/node_comit/',
  favicon: 'img/favicon.ico',
  organizationName: 'prma85', // Usually your GitHub org/user name.
  projectName: 'node_comit', // Usually your repo name.
  scripts: ['https://buttons.github.io/buttons.js'],
  themeConfig: {
    algolia: {
      apiKey: '1265343f7e001be91f5be260fd529063',
      indexName: 'prma85_node_comit',
      algoliaOptions: {}
    },
    googleAnalytics: {
      trackingID: 'UA-157726893-1'
    },
    navbar: {
      title: 'Node JS Course',
      logo: {
        alt: 'My Project Logo',
        src: 'img/logo.png'
      },
      links: [
        { to: 'docs/01-intro', label: 'Course', position: 'left' },
        { to: 'docs/exercises/all-exercises', label: 'Exercises', position: 'left' },
        { to: 'docs/extra/all-extra', label: 'Extra Content', position: 'left' },
        { to: 'docs/best-practices', label: 'Best Practices', position: 'left' },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/prma85/node_comit',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Paulo Andrade, ComIT. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: '../docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/prma85/node_comit/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
