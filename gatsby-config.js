module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#0277BD',
          'link-color': '#0277BD',
          'font-family': "'Roboto', sans-serif",
          'border-radius-base': '3px',
          'text-color': '#000',
        }
      }
    },
  ],
};
