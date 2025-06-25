import React from "react";
import { Avatar, Grid, IconButton, Box, Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={2} className="w-full">
        Avatar
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              {/* Placeholder for user initials */}
              R
            </Avatar>
          </Box>
        </Grid>

        {/* Review Content */}
        <Grid item xs={10}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Rashmi Saloon</p>
              <p className="opacity-70">2025-06-25 17:34:57.140056</p>
            </div>

            <Rating
              readOnly
              value={4.5}
              name="half-rating"
              precision={0.5}
            />

            <p>Good service is available here</p>
          </div>
        </Grid>

        {/* Delete Button */}
        <Grid item xs={1}>
          <IconButton>
            <DeleteIcon sx={{ color: red[700] }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewCard;
