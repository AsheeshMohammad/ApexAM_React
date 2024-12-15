import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonComponentStyled = styled(Button)(({ theme }) => ({
    color:'#fff',
    backgroundColor:'#000',
    position:'absolute',
    fontFamily:'Roboto-Reg',
    fontSize:'12px',
    borderRadius:'15px',
    paddingTop:'10px',
    paddingBottom:'10px',
    width:'150px !important',
    top:-100,
    '&:hover':{
      backgroundColor:'#000'
    }
  }));