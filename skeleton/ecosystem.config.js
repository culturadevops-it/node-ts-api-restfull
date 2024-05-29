module.exports = {
  apps: [
    {
      name: "${{values.project_slug}}",
      script: "dist/src/index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};