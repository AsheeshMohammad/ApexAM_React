import { Box, BoxProps, Grid2, Grid2Props, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';

export const HeaderStyledComponent = styled(Grid2)<Grid2Props>(() => ({
    background:'#fff',
    alignItems:'center',
    justifyContent:'space-between',
    boxShadow:'0 0 8px 0 rgb(0 0 0 / 20%)',
    position:'sticky',
    top:0,
    padding:2
}));
export const TitleTextStyledComponent = styled(Typography)<TypographyProps>(({ theme }) => ({
    background:'#fff',
    fontFamily:'Roboto-bold',
    color:'rgb(30 58 138/1)',
    fontSize:'2.25rem',
}));
export const MenuIconStyledComponent = styled(Box)<BoxProps>(({theme}) => ({
    color:'rgb(30 58 138/1)',
}));
export const LinkTextStyledComponent = styled(Link)<LinkProps>(({ theme }) => ({
    fontFamily:'Roboto-Reg',
    fontSize:'18px',
    textDecoration:'none',
    color:'#000'
}));
export const MenuOverlayStyledComponent = styled(Grid2)<Grid2Props>(({ theme }) => ({
    height:'100vh',
    background:'#fff',
    flexDirection:'column',
    paddingTop:'30%',
    gap:4
}));