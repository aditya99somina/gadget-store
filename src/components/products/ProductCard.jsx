import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductMenu from "../ui/ProductMenu";

const ProductCard = ({ product, onDelete }) => {
  const imagePath = `/assets/${product.image}`;

  return (
    <Card
      sx={{
        width: "310px",
        height: "405px",
        borderRadius: "4px",
        boxShadow: "none",
        border: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Typography
          sx={{
            color: "#3F51B5",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          {product.title}
        </Typography>

        <Typography sx={{ fontSize: "12px", mb: 3 }}>
          Price: €{product.price}
        </Typography>

        <Box
          component="img"
          src={imagePath}
          alt={product.title}
          sx={{
            width: "100%",
            height: "194px",
            objectFit: "contain",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: "13px",
            minHeight: "38px",
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.short_description}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            component={Link}
            to={`/products/${product.id}`}
            variant="outlined"
            size="small"
            sx={{
              fontSize: "11px",
              color: "#3F51B5",
              borderColor: "#ddd",
              textTransform: "none",
            }}
          >
            Details
          </Button>

          <ProductMenu id={product.id} onDelete={() => onDelete(product.id)} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
