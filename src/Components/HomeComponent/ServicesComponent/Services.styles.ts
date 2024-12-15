import styled from "@emotion/styled";
import { Box, Grid2 } from "@mui/material";

export const CardComponentStyled = styled(Box)(
  ({ background }: { background: string }) => ({
    height: "260px",
    width: "calc(100%/4.4)",
    background: background,
    borderRadius: "25px",
    transitionDelay: "3s",
    transitionProperty: "width",
  })
);
export const CardComponentGridStyled = styled(Grid2)(({ theme }) => ({
  justifyContent: "center",
  height: "420px",
  alignItems: "center",
  gap: "30px",
}));
export const CardIconGridStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: "#000",
  borderRadius: "10px",
  margin: 1,
  top: "12%",
  left: "10%",
}));
export const ServiceHeaderStyledComponent = styled(Box)(({ theme }) => ({
  minHeight: "150px",
  alignSelf: "flex-end",
}));
export const ServiceHeaderTextStyledComponent = styled(Box)(({ theme }) => ({
  fontFamily: "Roboto-Bold",
  fontSize: "18px",
  maxHeight: "80px",
}));
export const ServiceSubHeaderTextStyledComponent = styled(Box)(({ theme }) => ({
  fontFamily: "Roboto-Reg",
  fontSize: "12px",
}));
