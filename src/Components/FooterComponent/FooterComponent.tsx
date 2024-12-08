import { FooterTextStyleComponent } from "./Footer.styles";

const FooterComponent = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <FooterTextStyleComponent> © {year} Apex_AM. All Rights Reserved.</FooterTextStyleComponent>;
};

export default FooterComponent;
