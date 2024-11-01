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
      max: 1, // Even more conservative
      propagateCreateError: false, // Add this line
      acquireTimeoutMillis: 1000000, // Increased timeout
      createTimeoutMillis: 500000,
      idleTimeoutMillis: 500000,
    },
    useNullAsDefault: true,
  },
});
