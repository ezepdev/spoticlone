import styled, { css } from "styled-components";

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
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
`;

export const Box = styled.div`
  ${(props) => props["text-decoration"]};
  background-color: ${({ bgColor = "inherit" }) => bgColor};
  color: ${({ color = "inherit" }) => color};
  overflow-y: ${({ overflowY }) => overflowY}};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  margin-right: ${({ marginRight }) => marginRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  box-shadow: ${({ boxShadow }) => boxShadow};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
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
