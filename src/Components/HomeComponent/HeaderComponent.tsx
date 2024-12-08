import {
  HeaderStyledComponent,
  LogoStyledComponent,
  MenuIconStyledComponent,
  TitleTextStyledComponent,
} from "./HeaderComponent.styles";
import "./HeaderComponent.scss";
import HeaderHamBurgerMenu from "./HeaderHamBurgerMenu";
import { menuListMobile } from "../../utils/constant";
import LogoImage from "../../assets/images/LogoApexAM.png"


const HeaderComponent = () => {
  return (
    <HeaderStyledComponent container>
      {/* <TitleTextStyledComponent>ApexAM</TitleTextStyledComponent> */}
      <LogoStyledComponent >
        <img src={LogoImage} height={'100%'} width={'100%'} alt="Apex_AM" />
      </LogoStyledComponent>
      <MenuIconStyledComponent>
        <HeaderHamBurgerMenu MenuList={menuListMobile} />
      </MenuIconStyledComponent>
    </HeaderStyledComponent>
  );
};

export default HeaderComponent;
