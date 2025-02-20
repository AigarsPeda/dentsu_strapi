module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
    config: {
      hostname: "https://dentsu.lv", // ✅ Update this
    },
  },
});
