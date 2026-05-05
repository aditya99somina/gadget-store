import React, { useState } from "react";
import ProductForm from "../components/products/ProductForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

const AddProductPage = () => {
  const navigate = useNavigate();

  const [successOpen, setSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    long_description: "",
    price: "",
    year: "",
    RAM: "",
    warranty_period: "",
    image: "",
    features: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: Number(formData.price),
      year: Number(formData.year),
      features: formData.features.split(",").map((item) => item.trim()),
    };

    await axios.post("http://localhost:5000/products", newProduct);
    setSuccessOpen(true);
  };

  const closeAll = () => {
    setSuccessOpen(false);
    navigate("/products");
  };

  return (
    <>
      {/* Add Product Form Popup */}
      <Dialog open={!successOpen} maxWidth="sm" fullWidth onClose={closeAll}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#3F51B5",
            fontWeight: 700,
          }}
        >
          Add Product
          <IconButton onClick={closeAll}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitText="ADD PRODUCT"
          />
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={successOpen} onClose={closeAll} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
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
            Product successfully <br />
            added!
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProductPage;
