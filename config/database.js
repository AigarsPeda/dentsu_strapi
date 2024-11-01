const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    pool: {
      min: 0,
      max: 5, // Even more conservative
      propagateCreateError: false, // Add this line
      acquireTimeoutMillis: 900000, // Increased timeout
      createTimeoutMillis: 300000,
      idleTimeoutMillis: 300000,
    },
    useNullAsDefault: true,
  },
});
