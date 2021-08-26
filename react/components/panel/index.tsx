import React from 'react'
import * as S from './styled'

interface IPanelProps {
  bgImageUrl: string
  mainTitle: string
  hoverTitle: string
  text: string
  link: string
}

const Panel: React.FC<IPanelProps> = ({
  bgImageUrl,
  mainTitle,
  hoverTitle,
  text,
  link,
}) => {
  return (
    <S.PanelCard url={bgImageUrl}>
      <S.MainContent>
        <h4>
          {mainTitle} <span>_</span>
        </h4>
      </S.MainContent>
      <S.HoverContent>
        <h4>{hoverTitle}</h4>
        <p>{text}</p>
        <a href={link}>
          <span>SAIBA MAIS</span>
        </a>
      </S.HoverContent>
    </S.PanelCard>
  )
}

export default Panel
