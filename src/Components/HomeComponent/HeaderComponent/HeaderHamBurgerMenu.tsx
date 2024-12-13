import { useState } from "react";
import { MenuLinksMobileProps } from "../../utils/interfaceConstants";
import { LinkTextStyledComponent, MenuOverlayStyledComponent } from "./HeaderComponent.styles";

const HeaderHamBurgerMenu = ({MenuList}:{MenuList:MenuLinksMobileProps[]}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && <MenuOverlayStyledComponent container  className={`menu-overlay ${menuOpen ? "open" : ""} `}>
        {
          MenuList.map((item,index)=>{
            return <LinkTextStyledComponent key={index} to={item.url}>{item.menuName}</LinkTextStyledComponent>
          })
        }
      </MenuOverlayStyledComponent>}
    </div>
  );
};

export default HeaderHamBurgerMenu;
