/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()
const { ImgixSourceType } = require("@imgix/gatsby");

module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful Example`,
    description: `An example to show how to source data from Contentful.`,
    author: `tomdale`,
    url: `https://contentfultogatsby.letsgoheadless.com`,
    image: `https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=900&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        spaceId: `mshe2wat8vkh`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `@imgix/gatsby`,
      options: {
        domain: 'tom-proxy.imgix.net',
        secureURLToken: process.env.IMGIX_SECURE_TOKEN,
        sourceType: ImgixSourceType.WebProxy,
        defaultImgixParams: { auto: 'format,compress' },
        fields: [
          // Add an object to this array for each node type you want to modify. Follow the instructions below for this.
          {
            nodeType: "ContentfulAsset",
            fieldName: "imgixImage",
            getURL: node => `https:${node.file.url}`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-ETGGVHPR5J"],
        gtagConfig: {
          optimize_id: "OPT-NP53F4X",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview"]
        }
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
