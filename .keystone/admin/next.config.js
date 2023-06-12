const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      appDir: false,
    },
    // We use transpilePackages for the custom admin-ui pages in the ./admin folder
    // as they import ts files into nextjs
    transpilePackages: ['../../admin'],
     
  }
  
  module.exports = nextConfig