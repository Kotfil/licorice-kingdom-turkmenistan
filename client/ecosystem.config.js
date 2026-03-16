module.exports = {
  apps: [
    {
      name: "turkmen-licorice-client",
      script: "npm",
      args: "start",
      cwd: __dirname,
      env: {
        PORT: 3014,
        NODE_ENV: "production",
      },
    },
  ],
};
