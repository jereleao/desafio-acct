import { IOClients } from '@vtex/api'

import { AWSClient } from './aws'


export class Clients extends IOClients {
  public get leads() {
    return this.getOrSet('leads', AWSClient)
  }
}
