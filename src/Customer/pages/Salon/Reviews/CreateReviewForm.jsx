import React from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";
import { TextField, Button, Box, Rating, InputLabel } from "@mui/material";

const CreateReviewForm = () => {
  const formik = useFormik({
    initialValues: {
      reviewText: "",
      reviewRating: 0,
    },
    // validationSchema: Yup.object({
    //   reviewText: Yup.string()
    //     .required("Review text is required")
    //     .min(10, "Review must be at least 10 characters long"),
    //   reviewRating: Yup.number()
    //     .required("Rating is required")
    //     .min(0, "Rating must be at least 0")
    //     .max(5, "Rating cannot be more than 5"),
    // }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3 }}
      className="space-y-5 w-full lg:w-1/2"
    >
      <TextField
        fullWidth
        id="reviewText"
        name="reviewText"
        label="Review Text"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.reviewText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // error={formik.touched.reviewText && Boolean(formik.errors.reviewText)}
        // helperText={formik.touched.reviewText && formik.errors.reviewText}
      />

      <div className="space-y-2">
        <InputLabel>Rating</InputLabel>
        <Rating
          id="reviewRating"
          name="reviewRating"
          value={formik.values.reviewRating}
          onChange={(event, newValue) =>
            formik.setFieldValue("reviewRating", newValue)
          }
          onBlur={formik.handleBlur}
          precision={0.5}
        />
      </div>
      {/* {formik.touched.reviewRating && formik.errors.reviewRating && (
        <Typography color="error" variant="body2">
          {formik.errors.reviewRating}
        </Typography>
      )} */}

      <Button color="primary" variant="contained" type="submit">
        Submit Review
      </Button>
    </Box>
  );
};

export default CreateReviewForm;
