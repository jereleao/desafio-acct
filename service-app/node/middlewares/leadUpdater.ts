import { NotFoundError } from "@vtex/api"

//Define o middleware leadUpdater, responsável por requerer a atualização das informações de lead junto à API externa.
export async function leadUpdater(
    ctx: LeadContext,
    next: () => Promise<any>
  ) {
    const {
      state: { phone }
    } = ctx

    //Con
    const id = (await ctx.clients.lead.getItem(phone)).id

    if (!id) {
      throw new NotFoundError('Lead não cadastrado')
    }

    //Monta o body para envio e atualização na base da API da AWS.
    const body = {
      "id": id,
      "client_type": "CLIENT"
    }

    //Envia as informações de atualização da lead com base na função putItem do cliente lead.
    await ctx.clients.lead.putItem(body).
    then((response) => console.log(response))
    .catch((reason) => console.log('Algo deu errado:', reason?.response?.data))
  
    await next()
  }