import React from 'react'

import ServiceCard from './components/service-card'

interface ServicesProps {
  growthImg: string
}

const SliderTest2: StorefrontFunctionComponent<ServicesProps> = ({ growthImg }) => {
  return (
      <ServiceCard
        bgImageUrl={growthImg}
        mainTitle="Growth e Data"
        hoverTitle="Insights para o amanhã"
        text="Os dados são a nova moeda, portanto, a aplicação de um processo
              de análise de dados é fundamental para as empresas na era digital.
              O processo de coleta, organização, descrição, análise e interpretação
              de dados pode fornecer aos tomadores de decisão as informações
              necessárias para prever o futuro."
        link="https://acct.global/servicos/growth-data/"
      />
  )
}

SliderTest2.schema = {
  type: 'object',
  properties: {
    growthImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/2020/11/flip-growth.jpg',
    },
  },
}

export default SliderTest2
