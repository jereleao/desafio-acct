import styled, { css } from 'styled-components'

const animationInfo = css`
  .title-info {
    animation-name: title-info-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes title-info-animation {
      from {
        transform: translate3d(-40px, -20px, 0px);
      }
      to {
        transform: translate3d(0px, 0px, 0px);
      }
    }
  }

  .list,
  .btn-info {
    animation-name: list-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes list-animation {
      from {
        transform: translate3d(-20px, 30px, 0px);
      }
      to {
        transform: translate3d(0px, 0px, 0px);
      }
    }
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 408px;
  background: linear-gradient(125deg, #e11c59 0%, #1a1c42 100%);
  cursor: grab;

  .bottom-svg {
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 700px) {
    height: 800px;
  }

  :hover {
    ${animationInfo}
  }
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem 1.5rem;

  @media (min-width: 700px) {
    flex-direction: row-reverse;
    padding: 1rem 1.5rem;
  }

  @media (min-width: 1400px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const MediaContainer = styled.div`
  width: calc(100% - 20px);
`

export const Media = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 0.85rem;

  .rocket-img {
    width: 108px;
    height: auto;
    position: absolute;
    transform: translate(33.3%, -35%);
    z-index: 5;
  }

  .quadrante-img {
    width: 170px;
    height: auto;

    animation-name: side-by-side;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    transform-style: preserve-3d;
    transform-origin: 50% -80% 20px;

    @keyframes side-by-side {
      from,
      to {
        transform: translate3d(-30px, 0px, 0px) rotateY(-8deg) rotateX(8deg);
      }
      50% {
        transform: translate3d(30px, 0px, 0px) rotateY(8deg) rotateX(8deg);
      }
    }
  }

  @media (min-width: 1200px) {
    .rocket-img {
      width: 110px;
      top: 22%;
    }

    .quadrante-img {
      width: 570px;
    }
  }

  @media (min-width: 700px) and (max-width: 1199px) {
    .rocket-img {
      width: 92px;
      top: 27%;
    }

    .quadrante-img {
      width: 370px;
    }
  }

  @media (min-width: 700px) {
    position: initial;
    .rocket-img {
      left: 0px;
      transform: translate(0, -25%);
    }
  }
`

export const InfoContainer = styled.div`
  width: calc(100% - 20px);

  @media (min-width: 1200px) {
    width: calc(100% - 420px);
  }

  @media (min-width: 700px) and (max-width: 1199px) {
    width: calc(100% - 200px);
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-info {
    font-family: 'Roboto', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: #fcc200;
    text-align: center;
    line-height: 1;
    padding: 0;
    margin: 0;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0.75rem 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-size: 0.7875rem;
      line-height: 1.5;
      font-weight: 300;
      text-align: center;

      svg {
        margin-right: 0.25rem;
        circle {
          fill: #fcc200;
        }
      }
    }
  }

  .btn-info {
    width: 104px;
    background: RGBA(15, 29, 64, 1);
    opacity: 1;
    padding: 10px 20px 10px 20px;
    border: 1px solid RGBA(15, 29, 64, 1);
    border-radius: 99px;

    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    font-size: 0.7875rem;
    line-height: 1.5;
    text-decoration: none;
    outline: none;
    font-weight: 300;
    cursor: pointer;

    :hover {
      color: #000000;
      border: 1px solid #ffffff;
      background: #ffffff;
      box-shadow: 0px 2px 10px 0px RGBA(0, 0, 0, 0.13);
    }
  }

  @media (min-width: 1200px) {
    .title-info {
      font-size: 3.5rem !important;
      font-weight: 600 !important;
    }

    .list {
      li {
        font-size: 1.125rem !important;
      }
    }

    .btn-info {
      width: 120px;
      font-size: 1rem;
    }
  }

  @media (min-width: 700px) {
    align-items: flex-start;

    .title-info {
      text-align: left;
      font-size: 2.1rem;
      font-weight: 500;
    }

    .list {
      margin: 1.5rem 0;

      li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: 0.9rem;

        svg {
          width: 20px;
          margin: 0.2525rem;
          circle {
            fill: #fcc200;
          }
        }
      }
    }
  }
`
