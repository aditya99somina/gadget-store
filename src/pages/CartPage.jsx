import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import QuantityCounter from "../components/ui/QuantityCounter";

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <Box sx={{ px: { xs: 2, md: 8 }, py: 7, minHeight: "70vh" }}>
        <Typography
          sx={{
            color: "#3F51B5",
            fontSize: "32px",
            fontWeight: 500,
            mb: 8,
          }}
        >
          Shopping Cart
        </Typography>

        <Paper
          sx={{
            maxWidth: "909px",
            minHeight: "299px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ddd",
            boxShadow: "none",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#3F51B5",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 600,
              mb: 3,
            }}
          >
            Your shopping cart is empty
          </Typography>

          <Button
            component={Link}
            to="/products"
            sx={{
              color: "#3F51B5",
              fontSize: { xs: "20px", md: "30px" },
              fontWeight: 600,
              textDecoration: "underline",
              textTransform: "none",
            }}
          >
            Go to Products Page
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 7, minHeight: "70vh" }}>
      <Box
        sx={{
          maxWidth: "1284px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            color: "#3F51B5",
            fontSize: { xs: "26px", md: "36px" },
            fontWeight: 500,
          }}
        >
          Shopping Cart
        </Typography>

        <Typography
          sx={{
            color: "#3F51B5",
            fontSize: { xs: "24px", md: "36px" },
            fontWeight: 500,
          }}
        >
          Total: {totalPrice.toFixed(2)}€
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1296px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {cartItems.map((item) => (
          <Paper
            key={item.id}
            sx={{
              minHeight: "299px",
              border: "1px solid #eee",
              boxShadow: "none",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "180px 1fr 220px 180px",
              },
              alignItems: "center",
              gap: 3,
              px: { xs: 3, md: 6 },
              py: 4,
            }}
          >
            <Box
              component={Link}
              to={`/products/${item.id}`}
              sx={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src={`/assets/${item.image}`}
                alt={item.title}
                sx={{
                  width: "150px",
                  height: "170px",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box>
              <Typography
                component={Link}
                to={`/products/${item.id}`}
                sx={{
                  color: "#3F51B5",
                  fontSize: "28px",
                  fontWeight: 600,
                  textDecoration: "none",
                  mb: 3,
                  display: "block",
                }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: "14px", mb: 1 }}>
                Year: {item.year}
              </Typography>
              <Typography sx={{ fontSize: "14px", mb: 1 }}>
                RAM Memory: {item.RAM}
              </Typography>
              <Typography sx={{ fontSize: "14px", mb: 1 }}>
                Warranty: {item.warranty_period}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Price: {item.price}€
              </Typography>
            </Box>

            <QuantityCounter
              quantity={item.quantity}
              onIncrease={() => dispatch(increaseQuantity(item.id))}
              onDecrease={() => dispatch(decreaseQuantity(item.id))}
              onRemove={() => dispatch(removeFromCart(item.id))}
            />

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                textAlign: { xs: "left", md: "right" },
              }}
            >
              Total: {(item.price * item.quantity).toFixed(2)}€
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CartPage;
