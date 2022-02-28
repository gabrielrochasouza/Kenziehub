import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 20px 0;
  animation: fadeUp 1s;
  h1 {
    margin: 35px 0;
    font-size: 26px;
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
    a {
      color: var(--Grey-1);
      cursor: pointer;
    }
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
