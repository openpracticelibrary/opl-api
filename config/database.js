module.exports = ({ env }) => {
  return {
    'defaultConnection': 'default',
    'connections': {
      'default': {
        'connector': 'mongoose',
        'settings': {
          'host': `${env.DATABASE_HOST || '127.0.0.1'}`,
          'port': `${env.DATABASE_PORT || 27017}`,
          'database': `${env.DATABASE_NAME || 'strapi'}`,
          'username': `${env.DATABASE_USERNAME || ''}`,
          'password': `${env.DATABASE_PASSWORD || ''}`
        },
        'options': {}
      }
    }
  };
};
