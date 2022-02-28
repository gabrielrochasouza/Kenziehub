import styled from "styled-components";

export const Container = styled.button`
  text-align: center;
  height: 48px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid ${({ isGrey }) => (isGrey ? "#868E96" : "#FF577F")};
  background-color: ${({ isGrey }) => (isGrey ? "#868E96" : "#FF577F")};
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    background-color: ${({ isGrey }) => (isGrey ? "#343B41" : "#59323F")};
    border: 2px solid ${({ isGrey }) => (isGrey ? "#343B41" : "#59323F")};
  }
`;
