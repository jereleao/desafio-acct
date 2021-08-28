import type { ClientsConfig, ServiceContext, RecorderState, EventContext } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { Clients } from './clients'
import { leadUpdater } from './middlewares/leadUpdater'
import { getPhone } from './middlewares/getPhone'


const TIMEOUT_MS = 5000

//Define o máximo de alocação de cache para o cliente Lead.
const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('lead', memoryCache)

//Define as configurações base dos clientes.
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

  //Context type declarada para evitar a necessidade de importar o ServiceContext nos handlers e resolvers.
  type Context = ServiceContext<Clients, State>

  //Declara a forma do "ctx.state"
  interface State extends RecorderState {
    phone: string
  }

  //Declara a forma do context de evento a ser utilizado a ser utilizado pelo middleware.
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

  interface TesteContext extends EventContext<Clients> {
    body: {
      phone: string
    }
  }
}

//Exporta o serviço definindo os clientes e eventos.
export default new Service({
  clients,
  events: {
    leadUpdater: [leadUpdater, getPhone]
  }
})
