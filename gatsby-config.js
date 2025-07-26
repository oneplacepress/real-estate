/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "4z8Sh64WDUVKrRGj8r3TCh",
        token: "zMmIX7TlyIPq71Pl1GGXB8sEA1LqWgadBVP5YE5ebsKqbXCcBWcUZJi1f4KAowEE8J7BDhqK24lCeAxpfFQvg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
