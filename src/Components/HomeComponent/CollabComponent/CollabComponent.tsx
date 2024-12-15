import "../ServicesComponent/Services.scss";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import { Button, Grid2 } from "@mui/material";
import {
  CardComponentGridStyled,
  CardComponentStyled,
  CardIconGridStyled,
  ServiceHeaderStyledComponent,
  ServiceHeaderTextStyledComponent,
  ServiceSubHeaderTextStyledComponent,
} from "../ServicesComponent/Services.styles";
import { ButtonComponentStyled } from "./CollabComponent.styles";

const CollabComponent = () => {
  const Services = [
    {
      ServiceName: "We Collaborate",
      ServiceDescription:
        "We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.",
      ServiceImage: <CodeIcon />,
      backgroundColor: "#e4bc8d",
      additionalClass: "slide-right",
      sx: {},
    },
    {
      ServiceName: "We Build",
      ServiceDescription:
        "We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs",
      ServiceImage: <BuildIcon />,
      backgroundColor: "#bec2c9",
      additionalClass: "slide-left",
    },
  ];
  return (
    <CardComponentGridStyled
      container
      position={"relative"}
      height={"280px !important"}
      gap={"100px !important"}
    >
      {Services.map((item) => (
        <CardComponentStyled
          className={item.additionalClass}
          background={item.backgroundColor}
          sx={{ ...item.sx }}
        >
          <Grid2
            container
            padding={"20px"}
            alignItems={"center"}
            height={"100%"}
          >
            <CardIconGridStyled
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: "30px",
                  color: "#fff",
                  margin: 1,
                },
              }}
            >
              {item.ServiceImage}
            </CardIconGridStyled>
            <ServiceHeaderStyledComponent>
              <ServiceHeaderTextStyledComponent>
                {item.ServiceName}
              </ServiceHeaderTextStyledComponent>
              <ServiceSubHeaderTextStyledComponent>
                {item.ServiceDescription}
              </ServiceSubHeaderTextStyledComponent>
            </ServiceHeaderStyledComponent>
          </Grid2>
        </CardComponentStyled>
      ))}
      <ButtonComponentStyled variant="contained">
        Contact us
      </ButtonComponentStyled>
    </CardComponentGridStyled>
  );
};

export default CollabComponent;
