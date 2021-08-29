import React from 'react'
import SliderItem from './components/slider-item'

interface ISliderProduct {
  productImg: string
}

const SliderProduct: StorefrontFunctionComponent<ISliderProduct> = ({ productImg }) => {
  return (
    <SliderItem
      bgImageUrl={productImg}
      mainTitle="Desenvolvimento de Produto"
      text="Somos especialistas em projetar e desenvolver
            produtos digitais de alto desempenho."
    />
  )
}

SliderProduct.schema = {
  type: 'object',
  properties: {
    productImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/slider/cache/bd3c8a1140f8efea5862f1836ed18556/slider-home-product.jpg',
    }
  },
}

export default SliderProduct
