// module.exports = [
//   "strapi::errors",
//   "strapi::security",
//   {
//     name: "strapi::cors",
//     config: {
//       enabled: true,
//       origin: ["*"],
//     },
//   },
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
//   { resolve: "./src/middlewares/admin-redirect" },
// ];

module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::security",
  // {
  //   name: "strapi::cors",
  //   config: {
  //     enabled: true,
  //     origin: ["*"],
  //   },
  // },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  {
    // name: "strapi::admin-redirect",
    resolve: "./src/middlewares/admin-redirect",
    config: {
      redirectFromRootTo: env("REDIRECT_FROM_ROOT_TO"),
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
