"use strict";
import path from "path";

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // console.log("config is", config);

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, './.strapi/client/my_index.html'), // Set the path to your custom HTML file
  //     filename: 'index.html', // The output file name
  //     inject: true, // Inject all assets into the given template
  //   }),
  //   // Your other plugins
  // ],

  console.log("config is ?????? ", config.plugins);

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
