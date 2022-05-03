import styled, { css } from "styled-components";

const primary_color = {
  color: "#1ED760",
};

const grid_element_template = css`
  grid-area: ${({ area }) => area};
`;

const flex_element_template = css``;

const grid_container_template = css`
  display: grid;
  grid-template-areas: ${({ areas }) => areas};
  grid-template-rows: ${({ rows }) => rows};
  grid-template-columns: ${({ columns }) => columns};
`;

const flex_container_template = css`
  display: flex;
  align-items: ${(props) => props["align-items"]};
  justify-content: ${(props) => props["justify-content"]};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const Box = styled.div`
  ${(props) => props["text-decoration"]};
  margin-right: ${(props) => props["margin-right"]};
  color: ${({ color }) => color || primary_color.color};
  padding: ${({ padding }) => padding};
  padding-bottom: ${(props) => props["padding-bottom"]};
  box-shadow: ${(props) => props["box-shadow"]};
  min-width: ${(props) => props["min-width"]};
  min-height: ${(props) => props["min-height"]};
  max-width: ${(props) => props["max-width"]};
  max-height: ${(props) => props["max-height"]};
  margin: ${({ margin }) => margin};
  margin-bottom: ${(props) => props["margin-bottom"]};
  border-radius: ${(props) => props["border-radius"]};
  width: ${({ width }) => width};
  max-width: ${(props) => props["max-width"]};
  height: ${({ height }) => height};
  object-fit: ${(props) => props["object-fit"]};
  background-color: ${({ bg_color }) => bg_color || "inherit"};
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
