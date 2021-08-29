import React from 'react'
import SliderItem from './components/slider-item'

interface ISliderEngineering {
  engineeringImg: string
}

const SliderEngineering: StorefrontFunctionComponent<ISliderEngineering> = ({ engineeringImg }) => {
  return (
    <SliderItem
      bgImageUrl={engineeringImg}
      mainTitle='Engenharia de E-commerce'
      text="Equipes de alto desempenho entregando algumas
            das soluções de e-commerce mais complexas do mundo."
    />
  )
}

SliderEngineering.schema = {
  type: 'object',
  properties: {
    engineeringImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/slider/cache/84cd59cb1674e681c105f836bff494d6/slider-home-engineering.jpg',
    }
  },
}

export default SliderEngineering
