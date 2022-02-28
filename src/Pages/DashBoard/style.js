import styled from "styled-components";

export const Header = styled.nav`
    width: 100%;
    border-bottom: 1px solid var(--Grey-3);
    
    `
export const DashContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px ;
    animation: fadeUp 0.5s;
    h1{
        font-size: 26px;
        
    }
    button {
      width: 80px;
      background-color: var(--Grey-3);
      border: 2px solid var(--Grey-3);
      :hover {
        background-color: var(--Grey-2);
        border: 2px solid var(--Grey-2);
      }
    }

`

export const UserContainer = styled.header`
     width: 100%;
    border-bottom: 1px solid var(--Grey-3);
    div{
        min-height: 118px;

        @media (max-width:450px){
            display: initial;
            padding: 20px;
            h2,p{
                padding: 10px 20px;
            }
        }
    }
    p{
        color: var(--Grey-1);
    }
`
export const TecnologiesContainer = styled.main`
    margin: 0 0 30px;
    >div{
        flex-direction: column;
    }


`
export const TecnologiesHeader= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    width: 100%;
    button {
      width: 32px;
      height: 32px;
      font-size: 25px;
      font-weight: 700;
      background-color: var(--Grey-3);
      border: 2px solid var(--Grey-3);
      :hover {
        background-color: var(--Grey-2);
        border: 2px solid var(--Grey-2);
      }
    }
`
export const TecnologiesBox = styled.div`
    width: 100%;
    background-color: var(--Grey-3);
    padding: 10px 18px;
    border-radius:4px ;
    
    .vazio{
        color: var(--Grey-4);
        text-align: center;
        font-size: 24px;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;
        svg{
            width: 50px;
            color: var(--Grey-4);
            height: 50px;
            margin: 0 10px;
        }
    }
`

