module.exports = {
  siteMetadata: {
    title: "Anna Gerber",
    siteUrl: "https://www.annagerber.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7na0qgn7",
        dataset: "production",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
