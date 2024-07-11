module.exports = (config, { strapi }) => {
  if (!config?.redirectFromRootTo) {
    return;
  }

  const redirects = ["/", "/index.html"].map((path) => {
    return {
      path,
      method: "GET",
      config: { auth: false },
      handler: (ctx) => ctx.redirect("/strapi/admin/"),
    };
  });

  strapi.server.routes(redirects);
};
