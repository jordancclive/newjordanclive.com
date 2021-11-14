require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    siteTitle: 'Jordan Clive',
    siteTitleAlt: 'Jordan Clive',
  },
  plugins: [
    {
      resolve: `@devpanther/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `YYYY.MM.DD`,
        navigation: [
          {
            title: `Bio`,
            slug: `/bio`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `UX Mentorship`,
            slug: `/mentorship`,
          },
          {
            title: `Portfolio`,
            slug: `/portfolio`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/jordanclive/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/JordanClive`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @devpanther/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `source sans pro:300,400,400i,700`, // you can also specify font weights and styles
          // 'Open Sans',
          // 'Sanchez',
          'Inter',
        ],
        display: 'swap',
      },
    },
  ].filter(Boolean),
};