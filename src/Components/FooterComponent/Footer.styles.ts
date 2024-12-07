import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterTextStyleComponent = styled(Typography)<TypographyProps>(({ theme }) => ({
    background:'#fff',
    fontFamily:'Roboto-reg',
    fontSize:'12px',
    // position:'fixed',
    // bottom:0,
    textAlign:'center',
    width:'100%',
}));