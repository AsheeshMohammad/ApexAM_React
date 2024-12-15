import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopHeader = styled(Box)<BoxProps>(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 10,
  width: "100vw",
  boxShadow: "0 0 8px 0 rgb(0 0 0 / 20%)",
}));
export const ContentHeaderStyledComponent = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: "Roboto-bold",
    color: "#000",
    fontSize: "100px",
    textAlign: "center",
  })
);
export const ContentBodyStyledComponent = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: "Roboto-bold",
    color: "rgb(107 114 128/1)",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: 1,
    textTransform: "capitalize",
    marginTop: -15,
  })
);
