export const lead = async (
  _: any,
  { phone }: { phone: string },
  { clients: { leads: AWSClient } }: Context
) => AWSClient.getLead(phone)
