// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smartdust Docs',
  tagline: 'Smartdust is cool',
  favicon: 'img/smartdust-logo-2022-margins.png',

  url: 'https://smartdust-me.github.io',
  baseUrl: '/docs/',

  organizationName: 'smartdust-me',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/smartdust-me/docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/smartdust-me/docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SmartDust',
      style: 'dark', 
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/smartdust-logo-2022-margins.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },

        {
          href: 'https://github.com/smartdust-me/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/smartdust.me',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/smartdust',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/smartdust-me/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 
      Smartdust, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;

