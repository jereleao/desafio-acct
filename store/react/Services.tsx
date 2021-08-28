import React from 'react'

import ServiceCard from './components/service-card'
import * as S from './styles/services'

interface ServicesProps {
  squadImg: string
  growthImg: string
  designImg: string
  tecImg: string
}

const Services: StorefrontFunctionComponent<ServicesProps> = ({
  squadImg,
  growthImg,
  designImg,
  tecImg,
}) => {
  console.log({ squadImg, growthImg, designImg, tecImg })
  return (
    <S.ServicesContainer>
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
      <ServiceCard
        bgImageUrl={designImg}
        mainTitle="Experience Design"
        hoverTitle="Conectando com pessoas"
        text="Experience design é uma questão de empatia. Ao criar experiências,
              estamos tentando ver o mundo através dos olhos do cliente e imaginar
              o que ele estará procurando ao navegar em nossos sistemas. A experiência
              do usuário é uma ferramenta estratégica de negócios se você aplicar aos
              seus projetos e processos de forma inteligente."
        link="https://acct.global/pt/servicos/experience-design/"
      />
      <ServiceCard
        bgImageUrl={tecImg}
        mainTitle="Tecnologia"
        hoverTitle="Criando o futuro"
        text="Na ACCT vivemos e respiramos o desenvolvimento de software. Mais de 60%
              de nossos funcionários são engenheiros de software. Como uma empresa
              enraizada nas melhores práticas de desenvolvimento, nossa responsabilidade
              como engenheiros e criadores se expressa através do desenvolvimento de
              soluções digitais."
        link="https://acct.global/pt/servicos/tecnologia/"
      />
    </S.ServicesContainer>
  )
}

Services.schema = {
  title: 'editor.services.title',
  description: 'editor.services.description',
  type: 'object',
  properties: {
    squadImg: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default:
        'https://acct.global/wp-content/uploads/2020/11/flip-delivery-squads.jpg',
    },
    growthImg: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/2020/11/flip-growth.jpg',
    },
    designImg: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default:
        'https://acct.global/wp-content/uploads/2020/11/flip-exp-design.jpg',
    },
    tecImg: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default:
        'https://acct.global/wp-content/uploads/2020/11/flip-tecnology.jpg',
    },
  },
}

export default Services
