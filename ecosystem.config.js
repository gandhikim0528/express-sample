module.exports = {
  apps : [{
    name: 'app',
    script: './bin/www',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'myapp:*'
    },
    env_production: {
      NODE_ENV: 'production',
      DEBUG: 'myapp:info'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:gandhikim0528/express-sample.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
