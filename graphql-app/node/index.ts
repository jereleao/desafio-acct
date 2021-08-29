import type { ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'
import { prop } from 'ramda'

import { Clients } from './clients'

import { lead } from './resolvers/lead'
import { leads } from './resolvers/leads'
import { newLead } from './resolvers/newLead'


const MEDIUM_TIMEOUT_MS = 6 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Lead: {
        id: prop('id'),
      },
      Mutation: {
        newLead,
      },
      Query: {
        lead,
        leads,
      },
    },
  },
})
