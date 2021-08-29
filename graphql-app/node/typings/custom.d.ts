export interface Lead {
  id: string;
  name: string;
  phone: string;
  company: string;
  email: string;
  country: string;
  company_position?: string;
  company_size?: string;
  url?: string;
  message: string;
  client_type: ClientType;
  created_at: string;
  updated_at: string;
}

enum ClientType {
  PROSPECT = 'PROSPECT',
  CLIENT = 'CLIENT',
}

export interface InputLeadPT {
  nome: string;
  telefone: string;
  empresa: string;
  email: string;
  pais: string;
  cargo?: string;
  numcolaboradores?: string;
  url?: string;
  caixa: string;
}

export interface InputLead {
  name: string;
  phone: string;
  company: string;
  email: string;
  country: string;
  company_position?: string;
  company_size?: string;
  url?: string;
  message: string;
}

export type Maybe<T> = T | void
