import React from 'react'
import SliderItem from './components/slider-item'

interface ISliderTecnology {
  tecnologyImg: string
}

const SliderTecnology: StorefrontFunctionComponent<ISliderTecnology> = ({ tecnologyImg }) => {
  return (
    <SliderItem
      bgImageUrl={tecnologyImg}
      mainTitle="Tecnologia"
      text="Somos uma empresa de arquitetura e engenharia
            de software focada na solução de problemas de
            negócios altamente complexos."
    />
  )
}

SliderTecnology.schema = {
  type: 'object',
  properties: {
    tecnologyImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/slider/cache/c820bffc74c48dd6db639764f87d2816/slider-home-technology.webp',
    }
  },
}

export default SliderTecnology
