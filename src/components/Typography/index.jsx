import styled from "styled-components";
import { Box } from "@/components/Container";

export const Typography = styled(Box)`
  font-size: ${(props) => props["font-size"]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
`;
