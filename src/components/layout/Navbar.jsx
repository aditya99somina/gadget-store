import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PhoneIcon from "@mui/icons-material/Phone";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/home", icon: <HomeIcon /> },
    { text: "Products", path: "/products", icon: <Inventory2Icon /> },
    { text: "Contact Us", path: "/contact", icon: <PhoneIcon /> },
  ];

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "90px",
          backgroundColor: "#3F51B5",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "90px !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LaptopMacIcon />
            <Typography variant="h6" fontWeight="bold">
              Gadget Store
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{ textTransform: "none" }}
              >
                {item.text}
              </Button>
            ))}

            <Button
              color="inherit"
              component={Link}
              to="/cart"
              startIcon={
                <Badge badgeContent={totalQuantity} color="error">
                  <ShoppingCartIcon />
                </Badge>
              }
              sx={{ textTransform: "none" }}
            >
              Cart
            </Button>
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{ display: "flex", gap: 2 }}
              >
                {item.icon}
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            {/* Cart item */}
            <ListItem
              component={Link}
              to="/cart"
              onClick={() => setOpen(false)}
              sx={{ display: "flex", gap: 2 }}
            >
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCartIcon />
              </Badge>
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
