export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_AUTH_SECRET'),
    },
    url: '/',
    serveAdminPanel: true,
    forceHttps: env.bool('STRAPI_ADMIN_FORCE_HTTP', false),
  },
});
