import styled from "styled-components";

export const Link = styled.a``;

export const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 1.3em;
  background-color: #181818;
  padding: 16px;
  font-weight: 500;
  color: #1ed760;
  width: 200px;
  border-radius: 30px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
