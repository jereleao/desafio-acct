//Define o middleware leadUpdater, responsável por requerer a atualização das informações de lead junto à API externa.
export async function leadUpdater(
    ctx: OrderPlacedContext,
    next: () => Promise<any>
  ) {

    //Recebe o context e extrai o orderId.
    const orderId = ctx.body.orderId

    //Com base no orderId, busca as informações da order através do cliente OMS.
    const orderBody =  await ctx.clients.oms.order(orderId)

    //Extrai a informação desejada das informações da order. Nesse caso, o telefone.
    const phone = (orderBody.clientProfileData.phone).replace('+55','')

    ctx.state.phone = phone

    await next()
  }