import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductMenu = ({ id, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleEdit = () => {
    setAnchorEl(null);
    navigate(`/products/edit/${id}`);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    onDelete();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{
          fontSize: "11px",
          color: "#3F51B5",
          borderColor: "#ddd",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default ProductMenu;
