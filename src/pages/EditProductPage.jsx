import React, { useEffect, useState } from "react";
import ProductForm from "../components/products/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`http://localhost:5000/products/${id}`);

      setFormData({
        ...res.data,
        features: res.data.features.join(", "),
      });
    };

    getProduct();
  }, [id]);

  const closeAll = () => {
    setSuccessOpen(false);
    navigate("/products");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...formData,
      price: Number(formData.price),
      year: Number(formData.year),
      features: formData.features.split(",").map((item) => item.trim()),
    };

    await axios.put(`http://localhost:5000/products/${id}`, updatedProduct);

    setSuccessOpen(true);
  };

  if (!formData) {
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
      <Dialog
        open={!successOpen}
        maxWidth="sm"
        fullWidth
        onClose={() => navigate("/products")}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 700,
            fontSize: "20px",
            color: "#3F51B5",
          }}
        >
          Edit Product
          <IconButton onClick={() => navigate("/products")}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitText="UPDATE"
          />
        </DialogContent>
      </Dialog>

      <Dialog open={successOpen} onClose={closeAll} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton size="small" onClick={closeAll}>
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
            Updated successfully!
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProductPage;
