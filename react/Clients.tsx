import React from 'react'

import * as S from './styles/clients'

const Clients: StorefrontFunctionComponent = ({}) => {
  return (
    <S.ClientsContainer>
      {/* <S.ClientsContent> */}
        <S.Title>Trusted by<span>_</span></S.Title>
        <S.Clients>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_carrefour.svg" alt="Logo do carrefour" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_samsung.svg" alt="Logo do samsung" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_abinbev.svg" alt="Logo do abinbev" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_stanley-black-decker.svg" alt="Logo do stanley-black-decker" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_motorola.svg" alt="Logo do motorola" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_unilever.svg" alt="Logo do unilever" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_whirlpool.svg" alt="Logo do whirlpool" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_universal-mg.svg" alt="Logo do universal-mg" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_decathlon.svg" alt="Logo do decathlon" /></div>
          <div><img src="https://acct.global/wp-content/uploads/2020/09/clients_cea.svg" alt="Logo do cea" /></div>
        </S.Clients>
      {/* </S.ClientsContent> */}
    </S.ClientsContainer>
  )
}

export default Clients
