import {
  Box,
  BoxProps,
  Grid2,
  Grid2Props,
  Typography,
  TypographyProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, LinkProps } from "react-router-dom";

export const HeaderStyledComponent = styled(Grid2)<Grid2Props>(() => ({
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 2,
  background:'#f0f0f1',
  padding: 2,
  maxWidth:'1200px',
  margin:'auto'
}));
export const TitleTextStyledComponent = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: "Roboto-bold",
    color: "rgb(30 58 138/1)",
    fontSize: "2.25rem",
  })
);
export const MenuIconStyledComponent = styled(Box)<BoxProps>(({ theme }) => ({
  color: "rgb(30 58 138/1)",
}));
export const LinkTextStyledComponent = styled(Link)<LinkProps>(({ theme }) => ({
  fontFamily: "Roboto-Reg",
  fontSize: "18px",
  textDecoration: "none",
  color: "#000",
}));
export const MenuOverlayStyledComponent = styled(Grid2)<Grid2Props>(
  ({ theme }) => ({
    height: "100vh",
    background: "#fff",
    flexDirection: "column",
    paddingTop: "30%",
    gap: 4,
  })
);
export const LogoStyledComponent = styled(Box)(({ theme }) => ({
  height: 50,
}));
export const WindowMenuStyledComponent = styled(Box)(({ theme }) => ({}));
export const WindowMenuGridStyledComponent = styled(Grid2)(({ theme }) => ({
    gap:'15px'
}));
export const WindowMenuTextStyledComponent = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "Roboto-Med",
    color: "#000",
    padding:'5px',
    transition: "transform 0.2s ease-in-out",
    borderRadius:'5px',
    ":hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
      background:'#e4bc8d',
      color:'#000'
    },
  })
);
