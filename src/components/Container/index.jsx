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
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
`;

export const Box = styled.div`
  background-color: ${({ bgColor = "inherit" }) => bgColor};
  color: ${({ color = "inherit" }) => color};
  
  padding: ${({ padding }) => padding};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingRight }) => paddingRight};

  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  

  border: ${({ border }) => border};
  position: ${({ position }) => position}};
  left: ${({ left }) => left}};
  right: ${({ right }) => right}};
  overflow-y: ${({ overflowY }) => overflowY}};
  overflow: ${({ overflow }) => overflow}};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius};
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
