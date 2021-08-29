
export const leads = (
  _: any,
  _args: any,
  { clients: { leads: AWSClient } }: Context
) => AWSClient.getLeads()
