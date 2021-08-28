//Define o middleware getPhone, responsável por ouvir o evento de compra finalizada e extrair a informação do telefone do cliente.
export async function getPhone(
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