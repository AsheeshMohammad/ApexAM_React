import styled from "@emotion/styled";
import { Grid2 } from "@mui/material";

export const PageContentGridStyledComponent = styled(Grid2)(({ theme }) => ({
    height:'200px',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
}));