module.exports = {
  siteMetadata: {
    title: 'Nathan Chu',
    titleTemplate: '%s | Nathan Chu',
    description:
      "Hello, World! I'm Nathan Chu (@nathanchu on GitHub) and this website is my corner of the Internet. I'm a full stack web developer who's worked with JavaScript, React, Node.js, HTML, and CSS. I've also worked some with PHP and SQL.",
    siteUrl: 'https://nathanchu.com',
    url: 'https://nathanchu.com',
    image: '/banner.png',
    sha: process.env.GIT_SHA || process.env.VERCEL_GIT_COMMIT_SHA || null,
    repo:
      process.env.GIT_REPO ||
      (process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
        ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
        : null)
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nathan Chu',
        short_name: 'Nathan Chu',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4169e1',
        display: 'standalone',
        icon: './src/images/codebackground.svg',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    'gatsby-plugin-styled-components'
  ]
}
