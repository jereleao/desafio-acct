import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'
import Lead from './lead'
import { Profile } from './profile'

// Exporta os clientes Lead, OMS e Profile.
export class Clients extends IOClients {
  public get lead() {
    return this.getOrSet('lead', Lead)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  public get profile() {
    return this.getOrSet('profile', Profile)
  }
}