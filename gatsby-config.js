module.exports = {
  siteMetadata: {
    title: `Application design and development, User Experience &amp; User Interface Design for Web, Mobile and Virtual
		Reality`,
    description: `We create customer centered and results focused applications for web, mobile and virtual reality | Jackson, TN &amp; Nashville, TN`,
    author: `Sodium Halogen Team`,
    social: {
      twitter: `sodiumhalogen`,
    },
    siteUrl: `https://new.sodiumhalogen.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1524,
              quality: 100,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-196100-12`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sodium Halogen Blog`,
        short_name: `SH-Blog`,
        start_url: `/lab-notes`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/sh-logo-favicon-source.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sodium Halogen Case Studies`,
        short_name: `SH-Case-Studies`,
        start_url: `/case-studies`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/sh-logo-favicon-source.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
  },
}
