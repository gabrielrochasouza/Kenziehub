import styled from "styled-components";

export const Container = styled.div`
  text-align: start;
  margin: 10px 0;
  label {
    span {
      color: red;
    }
  }
  div {
    height: 48px;
    padding: 0px 0 0px 16px;
    background-color: var(--Grey-2);
    border-radius: 4px;
    border: 2px solid var(--Grey-2);
    margin: 9px 0;
    display: flex;
    justify-content: space-between;
    :focus-within {
      border: 2px solid var(--Grey-0);
    }
  }
  div:hover {
    border: 2px solid var(--Grey-0);
  }

  input,
  select {
    background-color: transparent;
    width:100%;
    height: 100%;
    border: 0;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--Grey-0);

  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover
  {
    -webkit-text-fill-color: var(--Grey-0);
    /* -webkit-box-shadow: 0 0 0px 1000px transparent inset; */
    transition: background-color 5000s ease-in-out 0s;
  }
  option {
    background-color: var(--Grey-4);
  }
  input:placeholder {
    color: var(--Grey-0);
  }
`;
export const IconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 0;
  margin: 0;
  cursor: pointer;
  
  svg{
    border-radius: 50%;
    box-sizing: initial;
    padding: 4px;
    width: 21px;
    height: 21px;
    color: var(--Grey-1);
    transition: 0.5s;
    :hover{
      background-color: rgb(33 37 41);;
      transition: 0.5s;
    }
  }

`