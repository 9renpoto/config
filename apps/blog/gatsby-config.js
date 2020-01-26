const title = `:-) 🏕`
const author = 'Keisuke Kan'

const plugins = [
  `gatsby-plugin-preact`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-39548809-3',
    },
  },
  `gatsby-plugin-feed`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: title,
      short_name: title,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `content/assets/gatsby-icon.png`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  {
    resolve: 'gatsby-plugin-sentry',
    options: {
      dsn: process.env.SENTRY_DSN,
    },
  },
  `gatsby-plugin-typescript`,
  'gatsby-plugin-typescript-checker',
  {
    resolve: `gatsby-plugin-env-variables`,
    options: {
      whitelist: ['GATSBY_ALGOLIA_APP_ID', 'GATSBY_ALGOLIA_SEARCH_KEY'],
    },
  },
]

if (process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_ADMIN_KEY) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require('./src/utils/algolia'),
    },
  })
}

module.exports = {
  siteMetadata: {
    title,
    author,
    description: `Have fun, good luck`,
    siteUrl: `https://9renpoto.dev/`,
    social: {
      twitter: `9renpoto`,
    },
  },
  plugins,
}
