import styled from "styled-components";

const primary_color = {
  color: "#1ED760",
  bg_color: "#191414",
};

export const Container = styled.div`
  display: flex;
  place-content: center;
  color: ${primary_color.color};
  background-color: ${primary_color.bg_color};
`;
