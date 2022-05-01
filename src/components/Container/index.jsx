import styled, { css } from "styled-components";

const primary_color = {
  color: "#1ED760",
  bg_color: "#121212",
};

const grid_element_template = css`
  grid-area: ${({ area }) => area};
`;

const flex_element_template = css``;

const grid_container_template = css`
  display: grid;
  grid-template-areas: ${({ areas }) => areas};
  grid-template-rows: auto 1fr auto;
`;

const flex_container_template = css`
  display: flex;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const Box = styled.div`
  background-color: ${({ bg_color }) => bg_color || primary_color.bg_color};
  margin-right: ${(props) => props["margin-right"]};
  color: ${({ color }) => color || primary_color.color};
  padding: ${({ padding }) => padding};
  padding-bottom: ${(props) => props["padding-bottom"]};
  box-shadow: ${(props) => props["box-shadow"]};
  margin: ${({ margin }) => margin};
  margin-bottom: ${(props) => props["margin-bottom"]};
  text-decoration: ${(props) => props["text-decoration"]};
  border-radius: ${(props) => props["border-radius"]};
  width: ${({ width }) => width};
  max-width: ${(props) => props["max-width"]};
  height: ${({ height }) => height};
  object-fit: ${(props) => props["object-fit"]};
`;

export const FlexBox = styled(Box)`
  ${({ item }) => item && flex_element_template};
  ${({ container }) => container && flex_container_template};
`;

export const Grid = styled(Box)`
  ${({ item }) => item && grid_element_template};
  ${({ container }) => container && grid_container_template};
`;

export const AppContainer = styled(Box)``;
