import React from "react";
import { Grid, Box, LinearProgress, Rating } from "@mui/material";

const RatingCard = () => {
  return (
    <div className="border p-5 rounded-md">
      <div className="flex items-center space-x-3 pb-10">
        <Rating name="read-only" value={4.6} precision={0.5} readOnly />
        <p className="opacity-60">Ratings</p>
      </div>

      {/* Excellent */}
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p className="p-0">Excellent</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={40}
              color="success"
            />
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 p-2">19259</p>
          </Grid>
        </Grid>
      </Box>

      {/* Very Good */}
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p className="p-0">Very Good</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={30}
              color="success"
            />
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 p-2">19259</p>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p className="p-0">Good</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={25}
            />
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 p-2">19259</p>
          </Grid>
        </Grid>
      </Box>

      {/* Average */}
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p className="p-0">Average</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{
                bgcolor: "#d0d0d0",
                borderRadius: 4,
                height: 7,
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#885c0a",
                },
              }}
              variant="determinate"
              value={21}
              color="success"
            />
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 p-2">19259</p>
          </Grid>
        </Grid>
      </Box>

      {/* Poor */}
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p className="p-0">Poor</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={10}
              color="error"
            />
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 p-2">19259</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RatingCard;
