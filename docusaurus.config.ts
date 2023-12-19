import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes} from 'prism-react-renderer';
import {sidebarItemsGenerator} from './sidebars';

const config: Config = {
  title: "Sonallux's website",
  tagline: "\"From front-end finesse to back-end brilliance, let a fullstack software engineer bring your digital dreams to life.\" - ChatGPT",
  url: 'https://sonallux.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-200.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sonallux', // Usually your GitHub org/user name.
  projectName: 'sonallux.github.io', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarItemsGenerator,
          editUrl: 'https://github.com/sonallux/sonallux.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sonallux/sonallux.github.io/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Sonallux's website",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-200.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sonallux',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Wiki',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Profile',
              href: 'https://github.com/sonallux',
            },
            {
              label: 'Website source code',
              href: 'https://github.com/sonallux/sonallux.github.io',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sonallux's website. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['java', 'json']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;