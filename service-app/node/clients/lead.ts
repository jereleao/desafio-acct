import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

// Cria o cliente lead, para realizar as requisições à API externa.
export default class Lead extends ExternalClient {

  // Define o construtor com a baseUrl da API a ser requisitada.
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

  // Define a função de requisição de PUT à API, para atualização do status da lead.
  public async putItem(data: Object): Promise<any> {
    return this.http.put('/v1/leads', JSON.stringify(data))
  }

  // Define a função de requisição de GET à API, para receber o id da lead com base no email fornecido.
  public async getItem(email: String): Promise<any> {
    return this.http.get('/v1/leads', { params: { email } })
  }
}