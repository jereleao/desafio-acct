import styled, { css } from 'styled-components';

const animation = css`
  .teacher-img,
  .man-img,
  .monitor-img {
    animation-name: teacher-animation;
    animation-timing-function: linear;
    animation-duration: 1.1s;
    transform-style: preserve-3d;
    transform-origin: 0% 100% 0px;

    @keyframes teacher-animation {
      from { transform: translate3d(-4px, 0, 0) rotate(-10deg) rotateX(90deg); }
      to { transform: translate3d(0px, 0, 0) rotate(0deg) rotateX(0deg); }
    }
  }

  .title {
    animation-name: title-rotate-animation;

    @keyframes title-rotate-animation {
      from { transform: translate3d(0px, 20px, 0px) rotate(5deg); opacity: 0; }
      to { transform: translate3d(0, 0, 0) rotate(0); opacity: 1; }
    }
  }

  .text {
    animation-delay: 0.10s;
    animation-name: text-rotate-animation;

    @keyframes text-rotate-animation {
      from { transform: translate3d(0px, 20px, 0px) rotate(5deg); opacity: 0; }
      to { transform: translate3d(0, 0, 0) rotate(0); opacity: 1; }
    }
  }

  .btn {
    animation-delay: 0.30s;
    animation-name: left-to-right-btn-animation;
    animation-iteration-count: initial;
    animation-duration: 0.5s;

    @keyframes left-to-right-btn-animation {
      from { transform: translate3d(-200px, 0, 0); opacity: 0; }
      to { transform: translate3d(0px, 0, 0); opacity: 1; }
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
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0rem 0.50rem 1.50rem;

  @media (min-width: 700px) and (max-width: 1249px) {
    padding: 1.5rem 0.5rem;
  }

  @media (min-width: 1250px) {
    flex-direction: row-reverse;
    text-align: left;
    padding: 1.5rem 2rem;
  }
`;

export const MediaContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
`;

export const Media = styled.div`
  width: 100%;

  .man-img,
  .woman-img,
  .monitor-img,
  .orange-img,
  .blue-img,
  .yellow-img {
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
    .teacher-img {
      width: 209px;
      top: 20px;
      right: unset;
    }

    .man-img,
    .monitor-img {
      display: initial;
      position: absolute;
    }

    .monitor-img {
      top: -190px;
    }

    .man-img {
      right: 200px;
      z-index: 6;
    }
  }
`;

export const InfoContainer = styled.div`
  width: calc(100% - 20px);
`;

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

    animation-timing-function: linear;
    animation-duration: 0.6s;
    transform-style: preserve-3d;
    transform-origin: 0% 0% 0px;
  }

  .text {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 0.7875rem;
    line-height: 1.3;
    font-weight: 300;
    text-align: center;
    margin: 1.25rem 0;

    animation-timing-function: linear;
    animation-duration: 0.8s;
    transform-style: preserve-3d;
    transform-origin: 0% 0% 0px;
  }

  .btn {
    width: auto;
    background: RGBA(15,29,64,1);
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

    :hover { opacity: 0.7; }

    animation-name: button-animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;

    @keyframes button-animation {
      from,to { transform: scale(1.1, 1.1); }
      50% { transform: scale(1.0, 1.0); }
    }
  }

  @media (min-width: 1250px) {
    width: 600px;
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
`;
