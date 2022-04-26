import styled from "styled-components";

const primary_color = {
  color: "#1ED760",
  bg_color: "#1a1a1a",
};

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header header header" "content content content"
    "content content content" "player player player";
  color: ${primary_color.color};
  background-color: ${primary_color.bg_color};
`;
