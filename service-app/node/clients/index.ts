import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'
import Lead from './lead'

//Exporta os clientes Lead e OMS.
export class Clients extends IOClients {
  public get lead() {
    return this.getOrSet('lead', Lead)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }
}