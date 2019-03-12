module.exports = {
  // Customize me!
  siteMetadata: {
    company: "ORIIS",
    domain: "https://orris.com",
    defaultTitle: "Analytics Simplified",
    preamble:
      "We're a Mumbai, India based team.",
    defaultDescription:
      "We develop our own products. And provide software engineering and consulting to select clients.",
    postamble: "Think we can help your project? We'd love to hear from you:",
    contact: {
      email: "hi@gmail.com",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
