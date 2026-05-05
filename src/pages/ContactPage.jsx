import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const ContactCard = ({ icon, title, value }) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "300px",
        backgroundColor: "#F5E48B",
        boxShadow: 2,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        {icon}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 3 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "17px" }}>{value}</Typography>
      </CardContent>
    </Card>
  );
};

const ContactPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        px: { xs: 3, md: 8 },
        py: { xs: 3, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: "5", md: "10" },
        }}
      >
        {/* left section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: "700",
              lineHeight: "100%",
              maxWidth: "647px",
              mb: "4",
            }}
          >
            Contact us by Phone, Email,
            <br />
            or visit us in our office!
          </Typography>

          <Typography sx={{ fontSize: "20px", mb: 3, mt: 2 }}>
            Our address: Station Nord 23456, Greenland
          </Typography>

          {/* Google maps */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "745px",
              height: "323px",
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Station%20Nord%20Greenland&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
          <Typography
            sx={{
              mt: 2,
              //   fontFamily: "Roboto",
              fontSize: "16px",
              lineHeight: "130%",
              fontWeight: "400",
            }}
          >
            Google Maps
          </Typography>
        </Box>
        {/* Right section */}
        <Box
          sx={{
            width: { xs: "100%", md: "320px" },
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
          }}
        >
          {/* cards */}
          <ContactCard
            icon={<HeadphonesIcon sx={{ fontSize: 55 }} />}
            title="Phone number"
            value="0123456789"
          />
          <ContactCard
            icon={<AlternateEmailIcon sx={{ fontSize: 55 }} />}
            title="E-Mail"
            value="gadget@store.com"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
