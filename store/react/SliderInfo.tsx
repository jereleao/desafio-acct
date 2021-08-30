import React from 'react'
import * as S from './styles/sliderInfo'

interface ISliderInfo {
  rocketImg: string
  quadranteImg: string
}

const SliderInfo: StorefrontFunctionComponent<ISliderInfo> = ({ rocketImg, quadranteImg }) => {
  return (
    <S.Container>
      <S.Content>
        <S.MediaContainer>
          <S.Media>
            <img className="rocket-img" src={rocketImg} alt="Gif de um Foguete" />
            <img className="quadrante-img" src={quadranteImg} alt="Quadrante VTEX 2021" />
          </S.Media>
        </S.MediaContainer>
        <S.InfoContainer>
          <S.Info>
            <h4>Somos líder no Quadrante VTEX</h4>
            <ul>
              <li>
                <svg height="12" width="12">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                Mais de 100 colaboradores certificados.
              </li>
              <li>
                <svg height="12" width="12">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                Temos os clientes mais relevantes da VTEX.</li>
              <li>
                <svg height="12" width="12">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                Conteúdo técnico criado em parceria com a VTEX.
              </li>
            </ul>
            <button>Saiba mais</button>
          </S.Info>
        </S.InfoContainer>
      </S.Content>

      <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 121" preserveAspectRatio="none">
        <path fill="RGBA(255,255,255,1)" d="M0,123L1920,123L1920,6C1596,0,869,-26,0,108L0,123z" />
      </svg>
    </S.Container>
  )
}

SliderInfo.schema = {
  type: 'object',
  properties: {
    rocketGif: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/2021/05/foguete-acct.gif',
    },
    quadranteImg: {
      type: 'string',
      default: 'https://acct.global/wp-content/uploads/2021/05/quadrante_vtex_2021.png',
    }
  },
}

export default SliderInfo
