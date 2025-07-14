import React from "react";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import {
  TextField,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import "tailwindcss/tailwind.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const CategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    onSubmit: () => {
      console.log("submitting", formik.values);
    },
  });

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 p-4 w-full lg:w-1/2"
      >
        <Grid container spacing={2}>
          <Grid className="w-24 h-24" item xs={12}>
            {false ? (
              <div className="relative border">
                <img
                  className="w-24 h-24 object-cover"
                  src="https://cdn.pixabay.com/photo/2015/07/07/11/36/haircut-834280_1280.jpg"
                  alt=""
                />
                <IconButton
                  // onClick={handleRemoveImage}
                  size="small"
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    outline: "none",
                  }}
                >
                  <CloseIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  style={{ display: "none" }}
                  // onChange={handleImageChange}
                />

                <label className="relative" htmlFor="fileInput">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                    <AddPhotoAlternateIcon className="text-gray-700" />
                  </span>
                  {false && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>
              </>
            )}
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              // error={formik.touched.name && Boolean(formik.errors.name)}
              // helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ py: ".8rem" }}
            >
              create category
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CategoryForm;
