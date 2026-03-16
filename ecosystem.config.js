module.exports = {
  apps: [
    {
      name: "licorice-kingdom-turkmenistan-client",
      script: "npm",
      args: "start",
      cwd: "./client",
      env: {
        PORT: 3014,
        NODE_ENV: "production",
      },
    },
  ],
};
