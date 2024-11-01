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
      max: 50,
      acquireTimeoutMillis: 600000,
      createTimeoutMillis: 300000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 2000,
    },
    useNullAsDefault: true,
  },
});
