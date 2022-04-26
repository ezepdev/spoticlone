import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  background-color: #000;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: start;

  & > * {
    margin: 20px;
  }
`;
