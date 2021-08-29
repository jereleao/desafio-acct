import React, { useState, useEffect } from "react";
import * as S from "./styles/backtotopbtn";

const BackToTopBtn: StorefrontFunctionComponent = ({ }) => {

    // Define os valores iniciais das const scrollPosition e classActive.
    const [scrollPosition, setScrollPosition] = useState(0);
    const [classActive, setClassActive] = useState("");

    // Função responsável por calcular a altura máximo do doc.
    function getDocHeight(): number {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    };

    // Função responsável por ouvir o evento de scroll.
    function listenToScrollEvent(): void {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                calculateScrollDistance();
            });
        });
    };

    // Função responsável por calcular a posição do scroll e atualizar os valores das const scrollPosition e classActive. 
    function calculateScrollDistance(): void {
        const scrollTop = window.pageYOffset;
        const winHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPosition = scrollTop / totalDocScrollLength;

        let className = "";

        if (scrollTop > winHeight * 0.05) {
            className = "active-progress";
        }

        setScrollPosition(scrollPosition);
        setClassActive(className)
    }

    // Inicia a lógica do botão.
    useEffect(() => {
        listenToScrollEvent();
    })

    return (
        <>
            <S.ButtonContainer href="#" className={`${classActive}`}>

                <S.SvgIcon xmlns="http://www.w3.org/2000/svg" width="48%" height="48%" viewBox="0 0 24 24">
                    <path d="M6.7,18.29L6.7,18.29c0.39,0.39,1.02,0.39,1.41,0L12,14.42l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,16.88C6.31,17.27,6.31,17.9,6.7,18.29z" />
                    <path d="M6.7,11.7L6.7,11.7c0.39,0.39,1.02,0.39,1.41,0L12,7.83l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,10.29C6.31,10.68,6.31,11.31,6.7,11.7z" />
                </S.SvgIcon>
                <S.SvgButton
                    width="100%"
                    height="100%"
                    viewBox="-3 -3 106 106"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            strokeDashoffset:
                                307.919 + 307.919 * -scrollPosition,
                        }}
                    >
                    </path>
                </S.SvgButton>

            </S.ButtonContainer>
        </>
    )
}

export default BackToTopBtn;
