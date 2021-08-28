import { ExternalClient, InstanceOptions, IOContext, Maybe } from "@vtex/api";

import type { InputLead, Lead } from '../typings/custom'


export class AWSClient extends ExternalClient {
  //Define o construtor com a baseUrl da API a ser requisitada.
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://wfue8x1b1a.execute-api.us-east-1.amazonaws.com',
      context,
      {
        ...options,
        retries: 3,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
  }

  public async getLeads(): Promise<any> {
    const { Items } = await this.http.get('/v1/leads/all')
    return Items
  }

  public async getLead(phone: String): Promise<any> {
    return this.http.get('/v1/leads', { params: { phone: phone } })
  }

  public async postLead(lead: InputLead): Promise<Maybe<Lead>> {
    return this.http.post('/v1/leads', JSON.stringify(lead))
  }
}