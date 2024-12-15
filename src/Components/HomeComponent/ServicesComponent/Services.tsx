import {
  CardComponentGridStyled,
  CardComponentStyled,
  CardIconGridStyled,
  ServiceHeaderStyledComponent,
  ServiceHeaderTextStyledComponent,
  ServiceSubHeaderTextStyledComponent,
} from "./Services.styles";
import "./Services.scss";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { Grid2 } from "@mui/material";

const Services = () => {
  const Services = [
    {
      ServiceName: "Mobile Application (Android / IOS)\n[Frontend and Backend]",
      ServiceDescription:
        "We build robust and user-friendly mobile apps for both Android and iOS platforms, handling everything from design to backend development",
      ServiceImage: <PhoneAndroidRoundedIcon />,
      backgroundColor: "#e4bc8d",
      additionalClass: "slide-right",
      sx: {},
    },
    {
      ServiceName: "Web Application [Frontend and Backend]",
      ServiceDescription:
        " We design and develop web applications that are responsive, performant, and scalable. We offer full-stack development services, from frontend to backend",
      ServiceImage: <DesktopWindowsOutlinedIcon />,
      backgroundColor: "#bec2c9",
      additionalClass: "slide-up",
      sx: {
        alignSelf: "flex-start",
      },
    },
    {
      ServiceName: "IT Solutions",
      ServiceDescription:
        "We provide comprehensive IT solutions to meet your business needs, including consulting, system integration",
      ServiceImage: <EmojiObjectsOutlinedIcon />,
      backgroundColor: "#bec2c9",
      additionalClass: "slide-left",
      sx: {},
    },
  ];
  return (
    <CardComponentGridStyled container >
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
    </CardComponentGridStyled>
  );
};

export default Services;
