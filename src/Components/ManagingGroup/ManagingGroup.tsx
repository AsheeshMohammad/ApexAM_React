import { Box, Typography } from "@mui/material";

const ManagingGroup = () => {
  return (
    <Box marginTop={10}>
      <Typography
        sx={{
          fontFamily: "Roboto-bold",
          color: "#000",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Our Clients
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto-bold",
          color: "#0008",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        We're in our first year of operation and are excited to partner with our
        first client!
      </Typography>
    </Box>
  );
};

export default ManagingGroup;
