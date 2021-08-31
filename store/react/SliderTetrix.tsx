import React from 'react'
import * as S from './styles/sliderTetrix'

interface ISliderTetrix {
  tetrixImg: string
  teacherImg: string
  manImg: string
  womanImg: string
  monitorImg: string
  orangeImg: string
  blueImg: string
  yellowImg: string
}

const SliderTetrix: StorefrontFunctionComponent<ISliderTetrix> = ({
  tetrixImg,
  teacherImg,
  manImg,
  womanImg,
  monitorImg,
  orangeImg,
  blueImg,
  yellowImg,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.MediaContainer>
          <S.Media>
            <img className="teacher-img" src={teacherImg} alt="Ilustração de uma professora" />
            <img className="man-img" src={manImg} alt="Ilustração de um homem" />
            <img className="woman-img" src={womanImg} alt="Ilustração de uma mulher" />
            <img className="monitor-img" src={monitorImg} alt="Ilustração de um monitor" />
            <img className="orange-img" src={orangeImg} alt="Ilustração de uma arte laranja" />
            <img className="blue-img" src={blueImg} alt="Ilustração de uma arte azul" />
            <img className="yellow-img" src={yellowImg} alt="Ilustração de uma arte com pontos amarelos" />
          </S.Media>
        </S.MediaContainer>
        <S.InfoContainer>
          <S.Info>
            <img className="tetrix-img" src={tetrixImg} alt="Tetrix logo" />
            <h4 className="title">O maior desafio universitário do mundo!</h4>
            <p className="text">Participe de uma experiência transformadora<br/> e insira-se no mercado digital.</p>
            <button className="btn">Saiba mais e inscreva-se!</button>
          </S.Info>
        </S.InfoContainer>
      </S.Content>

      <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 121" preserveAspectRatio="none">
        <path fill="RGBA(255,255,255,1)" d="M0,123L1920,123L1920,6C1596,0,869,-26,0,108L0,123z" />
      </svg>
    </S.Container>
  )
}

SliderTetrix.schema = {
  type: 'object',
  properties: {
    tetrixImg: {
      type: 'string',
      default: '',
    },
    teacherImg: {
      type: 'string',
      default: '',
    },
    manImg: {
      type: 'string',
      default: '',
    },
    womanImg: {
      type: 'string',
      default: '',
    },
    monitorImg: {
      type: 'string',
      default: '',
    },
    orangeImg: {
      type: 'string',
      default: '',
    },
    blueImg: {
      type: 'string',
      default: '',
    },
    yellowImg: {
      type: 'string',
      default: '',
    }
  }
}

export default SliderTetrix
