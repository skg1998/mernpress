module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "sdghjak82374ihury83yr3yr2u3h",
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
  development: {
    server: {
      port: process.env.PORT || 3000,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://localhost:27017/lapimenia',
    },
  }, 
  test: {
    server: {
      port: process.env.PORT || 3100,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://localhost/mernpress',
    },
  }, 
  production: {
    server: {
      port: process.env.PORT || 3200,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://mongo:27017/mernpress',
    },
  }
};