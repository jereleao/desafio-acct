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
    </S.Container>
  );
};

export default SliderItem;
