import { Box, TextField, Button } from "@mui/material";
import React from "react";

const ProductForm = ({ formData, setFormData, onSubmit, submitText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      sx={{
        width: "100%",
        maxWidth: "529px",
        mx: "auto",
        py: 7,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="Short description"
        name="short_description"
        value={formData.short_description}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="Long description"
        name="long_description"
        value={formData.long_description}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="Year"
        name="year"
        value={formData.year}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="RAM memory"
        name="RAM"
        value={formData.RAM}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        label="Warranty period"
        name="warranty_period"
        value={formData.warranty_period}
        fullWidth
        variant="filled"
        onChange={handleChange}
      />
      {/* <TextField
        label="Image file name"
        name="image"
        value={formData.image}
        onChange={handleChange}
        fullWidth
        variant="filled"
        placeholder="example: smartwatch.png"
      /> */}

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <Button
          type="button"
          variant="outlined"
          sx={{
            width: "124px",
            height: "48px",
            color: "#3F51B5",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: submitText === "UPDATE" ? "124px" : "180px",
            height: "48px",
            backgroundColor: "#3F51B5",
            fontWeight: 600,
            letterSpacing: "2px",
            "&:hover": {
              backgroundColor: "#303F9F",
            },
          }}
        >
          {submitText}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
