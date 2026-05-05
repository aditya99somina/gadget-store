import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#3F51B5",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2" sx={{ letterSpacing: 0.5 }}>
        @ All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
