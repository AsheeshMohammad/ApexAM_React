import styled from "@emotion/styled";
import { Box, Grid2 } from "@mui/material";

export const CardComponentStyled = styled(Box)(({ background }:{background:string}) => ({
  height: '260px',
  width: 'calc(100%/4.4)',
  background:background,
  borderRadius:'25px',
  transitionDelay:'3s',
  transitionProperty:'width'
}));
export const CardComponentGridStyled = styled(Grid2)(({ theme }) => ({
    justifyContent:'center',
    height:'420px',
    alignItems:'center',
    gap:'30px'
}));
