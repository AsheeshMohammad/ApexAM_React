import {
  HeaderStyledComponent,
  LogoStyledComponent,
  WindowMenuGridStyledComponent,
  WindowMenuStyledComponent,
  WindowMenuTextStyledComponent,
} from "./HeaderComponent.styles";
import "./HeaderComponent.scss";
import LogoImage from "../../../assets/images/LogoApexAM.png";

const HeaderComponent = () => {
  return (
    <HeaderStyledComponent container>
      {/* <TitleTextStyledComponent>ApexAM</TitleTextStyledComponent> */}
      <LogoStyledComponent>
        <img src={LogoImage} height={"100%"} width={"100%"} alt="Apex_AM" />
      </LogoStyledComponent>
      <WindowMenuStyledComponent>
        <WindowMenuGridStyledComponent container spacing={2}>
          <WindowMenuTextStyledComponent>Home</WindowMenuTextStyledComponent>
          <WindowMenuTextStyledComponent>Services</WindowMenuTextStyledComponent>
          <WindowMenuTextStyledComponent>About</WindowMenuTextStyledComponent>
          <WindowMenuTextStyledComponent>Job Board</WindowMenuTextStyledComponent>
          <WindowMenuTextStyledComponent>Contact Us</WindowMenuTextStyledComponent>
        </WindowMenuGridStyledComponent>
      </WindowMenuStyledComponent>
      {/* <MenuIconStyledComponent>
        <HeaderHamBurgerMenu MenuList={menuListMobile} />
      </MenuIconStyledComponent> */}
    </HeaderStyledComponent>
  );
};

export default HeaderComponent;
