import styled from "styled-components";
import { Box } from "@/components/Container";

export const Typography = styled(Box)`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;
