module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
    config: {
      enabled: true,
      concurrent: 2,
      interval: 1000,
    },
  },
});
