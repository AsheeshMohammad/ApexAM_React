import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterTextStyleComponent = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontFamily:'Roboto-reg',
    fontSize:'12px',
    textAlign:'center',
    width:'100%',
}));