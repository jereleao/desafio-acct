import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

//Cria o cliente lead, para realizar as requisições à API externa.
export default class Lead extends ExternalClient {

  //Define o construtor com a baseUrl da API a ser requisitada.
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://8plwc00xh5.execute-api.us-east-2.amazonaws.com',
    context,
    {
        ...options,
        retries: 2,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
  }

  // Define a função de requisição de put à API.
  public async putItem(data: Object): Promise<any> {
    const res = await this.http.put('/items', JSON.stringify(data))
    return res
  }
}
