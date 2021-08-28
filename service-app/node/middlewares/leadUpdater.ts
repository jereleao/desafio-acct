//Define o middleware leadUpdater, responsável por requerer a atualização das informações de lead junto à API externa.
export async function leadUpdater(
    ctx: StatusChangeContext,
    next: () => Promise<any>
  ) {

    //Recebe o context e extrai o orderId.
    const orderId = ctx.body.orderId

    //Com base no orderId, busca as informações da order através do cliente OMS.
    const orderBody =  await ctx.clients.oms.order(orderId)

    //Extrai a informação desejada das informações da order. Nesse caso, o telefone.
    const phone = orderBody.clientProfileData.phone

    //Monta o body para envio e atualização na base da API da AWS.
    const body = {
    "phone": phone,
    "leadStatus": "client"
  }

    //Envia as informações de atualização da lead com base na função putItem do cliente lead.
    await ctx.clients.lead.putItem(body).
    then((response) => console.log(response))
    .catch((reason) => console.log('Algo deu errado:', reason?.response?.data))

    await next()
  }