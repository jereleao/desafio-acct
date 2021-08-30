import React from 'react';
import * as S from './styled';

interface ISliderItem {
  bgImageUrl: string;
  mainTitle: string;
  text: string;
}

const SliderItem: React.FC<ISliderItem> = ({
  bgImageUrl,
  mainTitle,
  text,
}) => {
  return (
    <S.Container url={bgImageUrl}>
      <S.InfoContainer>
        <S.Info>
          <h4>{mainTitle} <span>_</span></h4>
          <p>{text}</p>
        </S.Info>
      </S.InfoContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 121"
        preserveAspectRatio="none"
      >
        <path
          fill="RGBA(255,255,255,1)"
          d="M0,123L1920,123L1920,6C1596,0,869,-26,0,108L0,123z">
        </path>
      </svg>
    </S.Container>
  );
};

export default SliderItem;
