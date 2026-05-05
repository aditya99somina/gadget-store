import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductMenu from "../components/ui/ProductMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import QuantityCounter from "../components/ui/QuantityCounter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [successOpen, setSuccessOpen] = useState(false);

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product?.id),
  );

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    navigate("/products");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setSuccessOpen(true);
  };

  if (!product) {
    return (
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#3F51B5" }} />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 7 },
        }}
      >
        <Paper
          sx={{
            maxWidth: "1296px",
            minHeight: "675px",
            mx: "auto",
            p: { xs: 3, md: 8 },
            boxShadow: "none",
            border: "1px solid #ddd",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left Details */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#3F51B5",
                fontWeight: 700,
                mb: 4,
              }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                maxWidth: "500px",
                fontSize: "16px",
                lineHeight: "30px",
                color: "#444",
                mb: 4,
              }}
            >
              {product.long_description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                mb: 3,
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                Year: {product.year}
              </Typography>

              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                RAM Memory: {product.RAM}
              </Typography>

              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                Warranty: {product.warranty_period}
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2 }}>
              Features:
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 3,
                mb: 4,
                color: "#555",
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </Box>

            <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 3 }}>
              Price: {product.price}€
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
              <ProductMenu id={product.id} onDelete={handleDelete} />

              {cartItem ? (
                <QuantityCounter
                  quantity={cartItem.quantity}
                  onIncrease={() => dispatch(increaseQuantity(product.id))}
                  onDecrease={() => dispatch(decreaseQuantity(product.id))}
                  onRemove={() => dispatch(removeFromCart(product.id))}
                />
              ) : (
                <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  sx={{
                    width: "169px",
                    height: "48px",
                    backgroundColor: "#3F51B5",
                    letterSpacing: "2px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#303F9F",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              )}
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src={`/assets/${product.image}`}
            alt={product.title}
            sx={{
              flex: 1,
              width: { xs: "100%", md: "500px" },
              maxWidth: "648px",
              height: { xs: "300px", md: "603px" },
              objectFit: "contain",
            }}
          />
        </Paper>
      </Box>
      <Dialog
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton size="small" onClick={() => setSuccessOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <CheckCircleIcon sx={{ fontSize: 70, color: "green", mb: 2 }} />

          <Typography
            sx={{
              color: "#3F51B5",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Product successfully <br />
            added to the cart!
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetailsPage;
