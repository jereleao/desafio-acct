import { Service } from '@vtex/api'

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        leads: () => `Service number: ${Math.random()}`,
      },
    },
  },
})