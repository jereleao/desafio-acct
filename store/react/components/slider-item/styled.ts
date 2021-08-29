import styled from 'styled-components';

interface ICard {
  url: string;
}

export const Container = styled.div<ICard>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 408px;
  background-image: linear-gradient(rgba(0 0 0 / 40%), rgba(0 0 0 / 40%)), url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  background-color: #eee;
  cursor: grab;

  @media (min-width: 700px) {
    height: 800px;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;

  @media (min-width: 1800px) {
    width: 70%;
  }

  @media (min-width: 1600px) and (max-width: 1799px) {
    width: 70%;
  }

  @media (min-width: 1000px) and (max-width: 1599px) {
    width: 80%;
  }

  @media (min-width: 700px) and (max-width: 999px) {
    width: 90%;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h4 {
    width: 255px;
    font-family: 'Roboto', sans-serif;
    font-size: 2.35rem;
    font-weight: 600;
    color: #fcc200;
    text-align: left;
    line-height: 1;
    padding: 0;
    margin: 0;

    span {
      margin-left: -10px;
    }
  }

  p {
    width: 400px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 300;
    text-align: left;
  }

  @media (min-width: 700px) {
    h4 {
      font-size: 3.375rem;
      width: 360px;
      span { margin-left: -12px;  }
    }

    p { width: 500px; }
  }
`;
