import styled from "styled-components";

export const ContainerCard = styled.div`
  margin:11px 0px;
  padding: 0 20px;
  background-color: var(--Grey-4);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: var(--Grey-2);
    transition: 0.5s;
  }
  p{
      color: var(--Grey-1);
  }
  h3{
      font-size: 14px;
  }
`;
