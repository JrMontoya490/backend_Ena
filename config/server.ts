// Path: ./config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  
  // 💡 ¡Añade esta propiedad! Esto le dice a Koa que confíe en el proxy de Render.
  proxy: {
    koa: true,
  },
  
  admin: {
    auth: {
      secret: env('ADMIN_AUTH_SECRET'),
    },
    // Asegúrate de que esta URL use la variable de entorno (la tienes configurada correctamente en Render).
    url: env('RENDER_EXTERNAL_URL', '/'),
    serveAdminPanel: true,
    // La variable STRAPI_ADMIN_FORCE_HTTP que tienes en true ('ttue' en la imagen) es correcta para forzar el protocolo.
    forceHttps: env.bool('STRAPI_ADMIN_FORCE_HTTP', false),
  },
});