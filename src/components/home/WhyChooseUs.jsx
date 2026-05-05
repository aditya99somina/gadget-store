import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const features = [
  {
    icon: <WifiIcon sx={{ fontSize: 45 }} />,
    title: "Wireless Freedom",
    description:
      "wireless gadgets that provide freedom of movement while using them",
  },
  {
    icon: <DevicesOtherIcon sx={{ fontSize: 45 }} />,
    title: "Stay Connected",
    description:
      "gadgets that help people stay connected with their loved ones and colleagues",
  },
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 45 }} />,
    title: "Smart Home",
    description:
      "gadgets that make your home smarter and more efficient at the space of your own home",
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        py: 7,
        px: { xs: 2, md: 4 },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 6,
          fontSize: { xs: "24px", md: "32px" },
        }}
      >
        Why Choose us?
      </Typography>

      <Box
        sx={{
          maxWidth: "1071px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {features.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "311px" },
              height: "326px",
              backgroundColor: "#F5E48B",
              boxShadow: "none",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                px: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.icon}

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mt: 4, mb: 3, fontSize: "18px" }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "15px",
                  lineHeight: 1.2,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
