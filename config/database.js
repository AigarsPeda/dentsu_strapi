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
      min: 2,
      max: 20,
      acquireTimeoutMillis: 600000,
      createTimeoutMillis: 300000,
      idleTimeoutMillis: 300000,
      propagateCreateError: false,
    },
    useNullAsDefault: true,
  },
});
