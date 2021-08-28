import React from 'react';
import * as S from './styled';

interface IServiceCard {
  bgImageUrl: string;
  mainTitle: string;
  hoverTitle: string;
  text: string;
  link: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  bgImageUrl,
  mainTitle,
  hoverTitle,
  text,
  link,
}) => {
  return (
    <S.Card url={bgImageUrl}>
      <S.MainContent>
        <h4>
          {mainTitle} <span>_</span>
        </h4>
      </S.MainContent>
      <S.HoverContent>
        <h3>{hoverTitle}</h3>
        <p>{text}</p>
        <a href={link}>
          <span>SAIBA MAIS</span>
        </a>
      </S.HoverContent>
    </S.Card>
  );
};

export default ServiceCard;
