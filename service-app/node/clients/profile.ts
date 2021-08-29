import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'

// Cria o cliente profile, para realizar requisições na API Profile-System.
export class Profile extends JanusClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super(context, {
          ...options,
          headers: {
            ...(options && options.headers),
            VtexIdClientAutCookie: context.authToken,
          }
        })
      }

  // Define a função de requisição do email do usuário com base no id fornecido.
  public async getUser(id: String): Promise<any> {
    return this.http.get(`/api/profile-system/pvt/profiles/${id}/personalData`)
  }
}