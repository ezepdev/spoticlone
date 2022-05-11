import { FlexBox } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ChosenPlaylist } from "@/components/ChosenPlaylist";

export const Header = ({ chosenPlaylist }) => (
  <FlexBox container as="header" direction="column" padding="10px">
    <FlexBox item>
      <Logo />
    </FlexBox>
    <FlexBox item>
      {Object.keys(chosenPlaylist).length !== 0 && (
        <ChosenPlaylist playlist={chosenPlaylist} />
      )}
    </FlexBox>
  </FlexBox>
);
