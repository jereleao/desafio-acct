import { NotFoundError } from "@vtex/api"

// Define o middleware leadUpdater, responsável por requerer a atualização das informações de lead junto à API externa.
export async function leadUpdater(
    ctx: LeadContext,
    next: () => Promise<any>
  ) {

    // Recebe o email através do "ctx.state".
    const {
      state: { email }
    } = ctx

    // Com base no email, faz a requisição do ID da lead na API da AWS.
    const id = (await ctx.clients.lead.getItem(email)).id

    // Caso não haja cadastro na AWS com o email indicado, interrompe o middleware e avisa que não há usuário cadastrado.
    if (!id) {
      throw new NotFoundError('Lead não cadastrada')
    }

    //Monta o body para envio e atualização na base da API da AWS.
    const body = {
      "id": id,
      "client_type": "CLIENT"
    }

    // Envia as informações de atualização da lead com base na função putItem do cliente lead.
    ctx.clients.lead.putItem(body).
    
    then((response) => console.log(`Lead atualizada para ${response.client_type} com sucesso!`))
    .catch((reason) => console.log('Algo deu errado:', reason?.response?.data))
  
    await next()
  }