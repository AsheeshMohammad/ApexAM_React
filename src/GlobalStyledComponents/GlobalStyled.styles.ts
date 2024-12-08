import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';


export const TopHeader = styled(Box)<BoxProps>(({ theme }) => ({
    background:'#fff',
    padding:1
}));
export const ContentHeaderStyledComponent = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontFamily:'Roboto-bold',
    color:'rgb(30 58 138/1)',
    fontSize:'1.875rem',
    textAlign:'center',
    lineHeight:1.3
}));
export const ContentBodyStyledComponent = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontFamily:'Roboto-bold',
    color:'rgb(107 114 128/1)',
    fontSize:'1.25rem',
    textAlign:'center',
    lineHeight:1.3,
}));