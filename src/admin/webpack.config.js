"use strict";
import path from "path";

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // update HtmlWebpackPlugin config to use custom template
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === "HtmlWebpackPlugin") {
      plugin.options.template = path.resolve(__dirname, "./my_index.html");
    }
  });

  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  return config;
};
