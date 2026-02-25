const adClient = 'ca-pub-xxxxxxxx'; // Replace with your AdSense client ID

module.exports = {
  title: 'Tech Tutorials',
  tagline: 'Learn Programming Step by Step',
  url: 'https://shahil04.github.io',
  baseUrl: '/cstutorial/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shahil04', // GitHub org/user name
  projectName: 'cstutorial', // Repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  scripts: [
    {
      src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`,
      async: true,
      crossorigin: 'anonymous',
    },
  ],
  customFields: {
    adClient,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/shahil04/cstutorial/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/shahil04/cstutorial/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Tech Tutorials',
      logo: {
        alt: 'Tech Tutorials Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/python/intro', label: 'Python', position: 'left' },
        { to: '/docs/sql/basics', label: 'SQL', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Python', to: '/docs/python/intro' },
            { label: 'SQL', to: '/docs/sql/basics' },
          ],
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/shahil04/cstutorial' }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Tech Tutorials`,
    },
    prism: {
      additionalLanguages: ['python', 'sql'],
    },
  },
};
