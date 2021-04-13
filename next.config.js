module.exports = {
  target: 'serverless',
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_STAGE: process.env.NEXT_PUBLIC_STAGE
  }
};
