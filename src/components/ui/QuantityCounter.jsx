import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityCounter = ({ quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <Box
      sx={{
        width: "173px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {quantity === 1 ? (
        <IconButton
          onClick={onRemove}
          sx={{
            width: "48px",
            height: "48px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            color: "#3F51B5",
          }}
        >
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={onDecrease}
          sx={{
            width: "48px",
            height: "48px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            color: "#3F51B5",
          }}
        >
          <RemoveIcon />
        </IconButton>
      )}

      <Typography sx={{ fontSize: "42px", fontWeight: 500 }}>
        {quantity}
      </Typography>

      <IconButton
        onClick={onIncrease}
        sx={{
          width: "48px",
          height: "48px",
          backgroundColor: "#3F51B5",
          color: "#fff",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "#303F9F",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityCounter;
