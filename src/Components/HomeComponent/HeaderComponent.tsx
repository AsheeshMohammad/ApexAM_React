import {
  HeaderStyledComponent,
  MenuIconStyledComponent,
  TitleTextStyledComponent,
} from "./HeaderComponent.styles";
import "./HeaderComponent.scss";
import HeaderHamBurgerMenu from "./HeaderHamBurgerMenu";
import { menuListMobile } from "../../utils/constant";


const HeaderComponent = () => {
  return (
    <HeaderStyledComponent container>
      <TitleTextStyledComponent>ApexAM</TitleTextStyledComponent>
      <MenuIconStyledComponent>
        <HeaderHamBurgerMenu MenuList={menuListMobile} />
      </MenuIconStyledComponent>
    </HeaderStyledComponent>
  );
};

export default HeaderComponent;
