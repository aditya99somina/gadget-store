import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImg from "../../assets/hero_image.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        backgroundColor: "#F5E48B",
        minHeight: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 8 },
        py: { xs: 5, md: 0 },
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* left content */}
      <Box sx={{ maxWidth: "520px" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "30px", md: "42px" },
            lineHeight: 1.1,
            mb: 3,
          }}
        >
          Experience the Future of Technology Today!
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            maxWidth: "420px",
            mb: 4,
          }}
        >
          Unleash your inner tech enthusiast with our wide range of gadgets.
          Become a pro expert within a moment.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              color: "#3F51B5",
              borderColor: "#3F51B5",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Button>

          <Button
            component={Link}
            to="/products"
            variant="contained"
            sx={{
              backgroundColor: "#3F51B5",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#303F9F",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* right image */}
      <Box
        component="img"
        src={heroImg}
        alt="Hero"
        sx={{
          width: { xs: "300px", sm: "420px", md: "520px", lg: "623px" },
          height: "auto",
          maxHeight: "711px",
          objectFit: "contain",
          alignSelf: "flex-end",
        }}
      />
    </Box>
  );
};

export default HeroBanner;
