import styled from 'styled-components'

export const MainContent = styled.div`
  text-align: center;

  h4 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 2px 2px 10px black;
    padding: 0;

    span {
      margin-left: -7px;
      color: #fcc200;
      animation: blink 1s step-start infinite;
      -webkit-animation: blink 1s step-start infinite;

      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    }
  }
`

export const HoverContent = styled.div`
  display: none;
  width: 85%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.50rem;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 400;
    text-decoration: underline;
    color: #1d1d1d;

    :hover {
      text-decoration: none;
    }
  }
`
interface IPanelCard {
  url: string
}

export const PanelCard = styled.div<IPanelCard>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  background-color: #eee;

  :hover {
    background-color: rgb(252, 194, 0);
    background-image: none;
    ${MainContent} {
      display: none;
    }

    ${HoverContent} {
      display: flex;
    }
  }

  h4 {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`
