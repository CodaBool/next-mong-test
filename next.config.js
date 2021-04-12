module.exports = {
  target: 'serverless',
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    TEST_ENV: process.env.TEST_ENV,
  }
};