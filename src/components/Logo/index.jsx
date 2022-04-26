import logo from "@/spotify.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "BIZ UDPGothic", sans-serif;
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Logo = () => (
  <LogoContainer>
    <LogoTitle>Spoticlon</LogoTitle>
    <ImageContainer>
      <Image src={logo} />
    </ImageContainer>
  </LogoContainer>
);
