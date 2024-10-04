### Exporting data

```bash
yarn strapi export --no-encrypt
```

### Importing data

```bash
yarn strapi import
```

### Build

```bash
NODE_ENV=production yarn build
```

In webpack.config we are using custom html template to change some styles and scripts. Original template is in `.strapi/client/index.html` and custom template is in `./src/admin/index.html`.

If added new sections, you need to add them to the `page-populate-middleware.js` file.
