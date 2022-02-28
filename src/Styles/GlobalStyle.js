import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        color: var(--Grey-0);
        background-color: var(--Grey-4);
    }
    button{
        cursor: pointer;
        color: var(--Grey-0);
        background-color: var(--Color-primary);
        border-radius: 4px;
        margin: 22px 0px;
    }
    button:hover{
        background-color: var(--Color-primary-focus);

    }
    :root{
        --Color-primary:#ff577f;
        --Color-primary-focus:#ff427f;
        --Color-primary-negative:#59323F;

        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343b41;
        --Grey-1:#868e96;
        --Grey-0:#f8f9fa;

        --Succes:#3fe864;
        --Negative: #e83f5e;

        --font:'Inter', sans-serif;
        --font-nunito:'Nunito', sans-serif;
    }
    input{
        font-family: var()--font;
        color: var(--Grey-0);
    }
    h1{
        font-size: 16px;
        font-weight: bold;
        color: var(--Color-primary);
    }
    h2{
        font-size: 16px;
        font-weight: bold;
    }
    h3{
        font-size: 16px;
        font-weight: bold;
    }
    a{
        text-decoration: none;
    }

    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateX(-100px);
        }
        to{
            opacity: 1;
            transform: rotateY(0);

        }
    }

`