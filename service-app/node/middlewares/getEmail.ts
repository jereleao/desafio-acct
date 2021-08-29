// Define o middleware getPhone, responsável por ouvir o evento de compra finalizada e extrair a informação do telefone do cliente.
export async function getEmail(
    ctx: OrderPlacedContext,
    next: () => Promise<any>
  ) {

    // Extrai o orderId a partir do "ctx.body".
    const orderId = ctx.body.orderId

    // Com base no orderId, busca as informações da order através do cliente OMS.
    const orderBody =  await ctx.clients.oms.order(orderId)

    const id = orderBody.clientProfileData.userProfileId

    const email = (await ctx.clients.profile.getUser(id)).email

    ctx.state.email = email 

    await next()
  }