// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accredd Info & Help',
  tagline: 'Modern Investor Accreditations',
  favicon: 'img/favicon-accredd.ico',

  // Set the production url of your site here
  url: 'https://info.accredd.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hoangtommy', // Usually your GitHub org/user name.
  projectName: 'a-help-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://accredd.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://accredd.com',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Accredd Info & Help',
        logo: {
          alt: 'Accredd Logo',
          src: 'img/logo-accredd.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Info & Help',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://accredd.com',
            label: 'Accredd Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Info',
            items: [
              {
                label: 'Help Articles',
                to: '/',
              },
              {
                label: 'Info',
                to: 'https://api.accredd.com',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Investors',
                to: 'https://accredd.com',
              },
              {
                label: 'Issuers',
                to: 'https://accredd.com',
              },
              {
                label: 'support@accredd.com',
                to: 'mailto:support@accredd.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Home',
                href: 'https://accredd.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Accredd, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
