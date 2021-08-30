export const lead = async (
  _: any,
  { email }: { email: string },
  { clients: { leads: AWSClient } }: Context
) => AWSClient.getLead(email)
