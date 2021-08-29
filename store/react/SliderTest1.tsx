import React from 'react'

import ServiceCard from './components/service-card'

interface ServicesProps {
  squadImg: string
}

const SliderTest1: StorefrontFunctionComponent<ServicesProps> = ({ squadImg }) => {
  return (
    <ServiceCard
      bgImageUrl={squadImg}
      mainTitle="Quality Assurance"
      hoverTitle="Confiança e credibilidade"
      text="Um sistema de garantia de qualidade tem como objetivo aumentar a
            confiança e a credibilidade de produtos, processos e serviços. Ao
            mesmo tempo que melhora os processos de trabalho e a eficiência,
            além de permitir que a empresa tenha máximo controle e prevenção
            contra defeitos e mal funcionamento."
      link="https://dev-acct.pantheonsite.io/pt/servicos/quality-assurance/"
    />
  )
}

SliderTest1.schema = {
  type: 'object',
  properties: {
    squadImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/2020/11/flip-delivery-squads.jpg',
    }
  },
}

export default SliderTest1
