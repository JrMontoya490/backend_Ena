module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dv3oumr8f'),
        api_key: env('429984587841566'),
        api_secret: env('KXehwEf-amL6INd5XqS6ubQNDKY'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
