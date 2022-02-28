import styled from "styled-components";

export const SignInContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  animation: fadeUp 1s;
  padding: 30px 0;
  .titleContainer {
    width: 369px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 35px 0;
      font-size: 26px;
    }
    button {
      width: 100px;
      background-color: var(--Grey-3);
      border: 2px solid var(--Grey-3);
      :hover {
        background-color: var(--Grey-2);
        border: 2px solid var(--Grey-2);
      }
    }
    @media (max-width: 400px) {
      width: 90%;
    }
  }
`;

export const LoginForm = styled.form`
  background-color: var(--Grey-3);
  width: 369px;
  text-align: center;
  padding: 42px 22px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  h2 {
    color: var(--Grey-0);
  }
  p {
    margin: 24px auto 12px;
    color: var(--Grey-1);
    a {
      color: var(--Grey-1);
      cursor: pointer;
    }
  }
  button{
      background-color: var(--Color-primary-negative);
      border: 2px solid var(--Color-primary-negative);
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
