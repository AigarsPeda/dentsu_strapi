module.exports = {
  transfer: {
    throttle: {
      // Reduce number of concurrent operations
      concurrent: 2,
      // Add delay between batches (in milliseconds)
      interval: 10000,
    },
    // Smaller batch size for processing
    batch: {
      size: 50,
    },
    // Specific settings for assets
    assets: {
      // Reduce number of concurrent asset transfers
      concurrent: 1,
      // Size of asset batches
      batch: {
        size: 25,
      },
      // Add delay between asset transfers (in milliseconds)
      throttle: {
        interval: 10000,
      },
    },
  },
};
