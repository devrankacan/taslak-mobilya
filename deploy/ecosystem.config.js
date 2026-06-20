// PM2 process tanımı. PORT değerini sunucundaki boş porta göre güncelle.
module.exports = {
  apps: [
    {
      name: "mobilya-taslak",
      cwd: "/var/www/mobilya-taslak",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3011,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};
