import styled from "styled-components";

export const DarkScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(0, 0, 0,0.5);
`
export const ModalContainer = styled.form`
    animation: fadeUp 0.5s;
    max-width: 342px;
    margin: 0 auto;
    width: 100%;
    padding: 12px 22px 32px 17px;
    background-color: var(--Grey-3);
    button:nth-last-child(1){
        width: 40%;
        border: 2px solid var(--Grey-1);
        background-color: var(--Grey-1);
        margin: 0 0 0 5%;
        :hover{
            border: 2px solid var(--Grey-2);
            background-color: var(--Grey-2);
        }
    }
    button:nth-last-child(2){
        width: 55%;
        background-color: var(--Color-primary-negative);
        border: 2px solid var(--Color-primary-negative);
        :hover{
            border: 2px solid var(--Color-primary);
            background-color: var(--Color-primary);
        }
    }
`
export const ModalTitle = styled.div`
    background-color: var(--Grey-2);
    animation: fadeUp 0.5s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 0 25px 0 20px;
    max-width: 342px;
    margin: 0 auto;
    p{
        color: var(--Grey-1);
        font-weight: 600;
        font-family:var(--font-nunito) ;
        font-size: 16px;
        cursor: pointer;
    }
`