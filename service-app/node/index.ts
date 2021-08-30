import type { ClientsConfig, ServiceContext, RecorderState, EventContext } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { Clients } from './clients'
import { leadUpdater } from './middlewares/leadUpdater'
import { getEmail } from './middlewares/getEmail'


const TIMEOUT_MS = 5000

// Define o máximo de alocação de cache para o cliente Lead.
const memoryCache = new LRUCache<string, any>({ max: 5000 })

// Controla o montante de cache utilizada.
metrics.trackCache('lead', memoryCache)
metrics.trackCache('oms', memoryCache)
metrics.trackCache('profile', memoryCache)

// Define as configurações base dos clientes.
const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 3,
      timeout: TIMEOUT_MS,
      
    },
    status: {
      memoryCache,
    },
  },
}


declare global {

  // Context type declarada para evitar a necessidade de importar o ServiceContext nos handlers e resolvers.
  type Context = ServiceContext<Clients, State>

  // Declara a forma do "ctx.state"
  interface State extends RecorderState {
    email: string
  }

  // Declara a forma do context de evento a ser utilizado pelo middleware getEmail.
  interface OrderPlacedContext extends EventContext<Clients> {
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }

  // Declara a forma do context de evento a ser utilizado pelo middleware leadUpdater.
  interface LeadContext extends EventContext<Clients> {
    body: {
      phone: string
    }
  }
}

// Exporta o serviço definindo os clientes e eventos.
export default new Service({
  clients,
  events: {
    getEmail: [getEmail, leadUpdater]
  }
})
