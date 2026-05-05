import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/products/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 6,
        }}
      >
        <Button
          component={Link}
          to="/products/add"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#3F51B5",
            width: "242px",
            height: "48px",
            fontWeight: "500",
            letterSpacing: "2px",
            "&:hover": {
              backgroundColor: "#303F9F",
            },
          }}
        >
          ADD NEW PRODUCT
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 310px)",
            md: "repeat(3, 310px)",
            lg: "repeat(4, 310px)",
          },
          gap: "48px 24px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductsPage;
