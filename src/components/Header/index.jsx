import { FlexBox } from "@/components/Container";

export const Header = ({ children }) => (
  <FlexBox container as="header" padding={"10px"}>
    {children}
  </FlexBox>
);
