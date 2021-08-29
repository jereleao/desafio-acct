import type { InputLeadPT, InputLead} from '../typings/custom'

interface Args {
  lead: InputLeadPT
}

export const newLead = (
  _: any,
  { lead }: Args,
  { clients: { leads: AWSClient } }: Context
) => {
  const newLead:InputLead = {
    name: lead.nome,
    phone: lead.telefone,
    company: lead.empresa,
    email: lead.email,
    country: lead.pais,
    company_position: lead.cargo,
    company_size: lead.numcolaboradores,
    url: lead.url,
    message: lead.caixa,
  }
  return AWSClient.postLead(newLead)
}
