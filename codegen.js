module.exports = {
  schema: [process.env.API_URL],
  documents: ['src/**/*.graphql'],
  generates: {
    './src/app/services/pawme.graphql.service.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};
