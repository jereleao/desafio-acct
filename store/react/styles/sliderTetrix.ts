import styled, { css } from 'styled-components'

const animation = css`
  .monitor-img {
    animation-name: monitor-animation;
    animation-duration: 1s;
    transform-style: preserve-3d;
    transform-origin: 0% 100% 0px;

    @keyframes monitor-animation {
      from {
        transform: translate3d(-10px, 0, 0) rotateX(90deg);
      }
      to {
        transform: translate3d(0px, 0, 0) rotateX(0deg);
      }
    }
  }

  .teacher-img,
  .man-img {
    animation-name: rotateX-animation;

    animation-duration: 1.1s;
    transform-style: preserve-3d;
    transform-origin: 0% 100% 0px;

    @keyframes rotateX-animation {
      from {
        transform: translate3d(-10px, 0px, 0px) rotate(-10deg) rotateX(90deg);
      }
      to {
        transform: translate3d(0px, 0, 0) rotate(0deg) rotateX(0deg);
      }
    }
  }

  .woman-img {
    animation-name: woman-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;

    transform-origin: 0% 100% 0px;

    @keyframes woman-animation {
      from {
        transform: translate3d(-40px, 0, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0px, 0, 0);
        opacity: 1;
      }
    }
  }

  .blue-img {
    animation-name: blue-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes blue-animation {
      from {
        transform: translate3d(50px, 20px, 0) rotate(10deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0deg);
        opacity: 1;
      }
    }
  }

  .orange-img {
    animation-name: orange-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes orange-animation {
      from {
        transform: translate3d(50px, -10px, 0) rotate(-20deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0deg);
        opacity: 1;
      }
    }
  }

  .leaf-img {
    animation-name: leaf-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes leaf-animation {
      from {
        transform: translate3d(-20px, 20px, 0) rotate(-5deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0deg);
        opacity: 1;
      }
    }
  }

  .yellow-img {
    animation-name: yellow-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes yellow-animation {
      from {
        transform: translate3d(50px, -10px, 0px) rotate(-5deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0deg);
        opacity: 1;
      }
    }
  }

  .title {
    animation-name: title-rotate-animation;
    animation-duration: 0.6s;
    transform-style: preserve-3d;
    transform-origin: 0% 0% 0px;

    @keyframes title-rotate-animation {
      from {
        transform: translate3d(0px, 20px, 0px) rotate(5deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0);
        opacity: 1;
      }
    }
  }
  .text {
    animation-delay: 0.1s;
    animation-name: text-rotate-animation;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 0% 0% 0px;

    @keyframes text-rotate-animation {
      from {
        transform: translate3d(0px, 20px, 0px) rotate(5deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0) rotate(0);
        opacity: 1;
      }
    }
  }
  .btn {
    animation-delay: 0.3s;
    animation-name: left-to-right-btn-animation;
    animation-iteration-count: initial;
    animation-duration: 0.5s;

    @keyframes left-to-right-btn-animation {
      from {
        transform: translate3d(-200px, 0, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0px, 0, 0);
        opacity: 1;
      }
    }
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 408px;
  background: linear-gradient(45deg, #e11c59 0%, #1a1c42 100%);
  cursor: grab;

  .bottom-svg {
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 700px) {
    height: 800px;
  }

  :hover {
    ${animation}
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
  padding: 0rem 0.5rem 1.5rem;

  @media (min-width: 700px) and (max-width: 1249px) {
    padding: 1.5rem 0.5rem;
  }

  @media (min-width: 1250px) {
    flex-direction: row-reverse;
    text-align: left;
    padding: 1.5rem 2rem;
  }
`

export const MediaContainer = styled.div`
  width: calc(100% - 20px);

  @media (min-width: 1250px) {
    position: relative;
  }
`

export const Media = styled.div`
  width: 100%;

  .man-img,
  .woman-img,
  .monitor-img,
  .orange-img,
  .blue-img,
  .yellow-img,
  .leaf-img {
    display: none;
  }

  .teacher-img {
    width: 80px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 20px;
    z-index: 6;
  }

  @media (min-width: 700px) and (max-width: 1249px) {
    .teacher-img {
      width: 140px;
      right: 40px;
    }
  }

  @media (min-width: 1250px) {
    width: 760px;

    .man-img,
    .monitor-img,
    .woman-img,
    .orange-img,
    .blue-img,
    .yellow-img,
    .leaf-img {
      display: initial;
      position: absolute;
    }
    .teacher-img {
      width: auto;
      top: 20px;
      right: unset;
      left: 80px;
    }
    .monitor-img {
      top: -180px;
      right: 70px;
      z-index: 4;
    }
    .man-img {
      right: 80px;
      top: 5px;
      z-index: 6;
    }
    .woman-img {
      bottom: 73px;
      right: 113px;
      z-index: 6;
    }
    .orange-img {
      left: 110px;
      top: 65px;
      z-index: 2;
    }
    .blue-img {
      left: -35px;
      bottom: -150px;
      z-index: 1;
    }
    .yellow-img {
      left: 18px;
      top: 130px;
      z-index: 3;
    }
    .leaf-img {
      bottom: -160px;
      right: 50px;
    }
  }
`

export const InfoContainer = styled.div`
  width: calc(100% - 20px);
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tetrix-img {
    width: 250px;
    height: auto;
    margin-bottom: 3rem;
  }

  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 1.685rem;
    font-weight: 600;
    color: #fcc200;
    text-align: center;
    line-height: 1;
    padding: 0;
    margin: 0;
  }

  .text {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 0.7875rem;
    line-height: 1.3;
    font-weight: 300;
    text-align: center;
    margin: 1.25rem 0;
  }

  .btn {
    width: auto;
    background: RGBA(15, 29, 64, 1);
    opacity: 1;
    padding: 0.75rem 1.75rem;
    border: 0;
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
      opacity: 0.7;
    }

    animation-name: button-animation;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes button-animation {
      from,
      to {
        transform: scale(1.1, 1.1);
      }
      50% {
        transform: scale(1, 1);
      }
    }
  }

  @media (min-width: 1250px) {
    width: 90%;
    align-items: flex-start;
    margin: 0 auto;

    .title,
    .text {
      text-align: left;
    }
  }
  @media (min-width: 700px) {
    .title {
      font-size: 2.8125rem;
      font-weight: 700;
    }

    .text {
      font-size: 1.1rem;
      font-weight: 400;
      margin: 2rem 0;
    }

    .btn {
      padding: 1rem 2rem;
      font-size: 0.85rem;
    }
  }
`
