import styled from "styled-components";

// Base do botão.
export const ButtonContainer = styled.a`

    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(assets/fonts/MaterialIcons-Regular.ttf)
    }

    bottom: 100px;
    height: 45px;
    width: 45px;
    border-radius: 45px;
    background-color: #292929;
    box-shadow: inset 0 0 0 10px#292929;
    box-shadow: 0 0 0 2px #292929 !important;
    position: fixed;
    display: block;
    cursor: pointer;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    right: 100px;

    &.active-progress {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

    ::after {
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        text-align: center;
        position: absolute;
        cursor: pointer;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        width: 45px;
        height: 45px;
        color: #f2cc00;
        font-size: 20px;
        //content: '\eacf';
        line-height: 45px;
    }

    :hover::after {
        color: #ffffff;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      display: none;
}

    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

// SVG responsável pela ação de preenchimento do botão com base no scroll.
export const SvgButton = styled.svg`
    scroll-behavior: smooth;
    path {
        fill: none;
        box-sizing: border-box;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        transition: stroke-dashoffset 10ms linear 0s;
        stroke: #f2cc00;
        stroke-width: 6px;
        stroke-dasharray: 307.919, 307.919;
    }
`;

// SVG do ícone interno do botão.
export const SvgIcon = styled.svg`
    scroll-behavior: smooth;
    margin-top: 25%;
    z-index: 1;
    display: block;
    position: absolute;
    cursor: pointer;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    width: 100%;
    height: 48%;
    fill: #f2cc00;

    :hover {
        fill: #ffffff;
    }

`;