module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.NEXT_PUBLIC_GH_COMMIT_HASH_SHORT;
  },
};
