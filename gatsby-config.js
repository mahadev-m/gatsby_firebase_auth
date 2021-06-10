require("dotenv").config,
  (module.exports = {
    siteMetadata: {
      title: "myapp",
    },
    plugins: [
      "gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-postcss`,

      {
        resolve: "gatsby-plugin-firebase",
        options: {
          credentials: {
            apiKey: "AIzaSyCucxrrY_9BBIKAXvIYZKAjQGIR7ISnkbw",
            authDomain: process.env.authDomain,
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
            measurementId: process.env.messagingSenderId,
          },
        },
      },
    ],
  });
