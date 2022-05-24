import { FlexBox } from "@/components/Container";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";

export const ChosenPlaylistLoader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FlexBox
      container
      height="10vh"
      justifyContent="center"
      alignItems="center"
      padding="25px"
    >
      <ClipLoader color={theme.essential.base} loading={true} size="40px" />
    </FlexBox>
  );
};
