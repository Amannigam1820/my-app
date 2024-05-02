import React from "react";
import { Paper, Grid, TextField, Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { OrangeButton, BackButton } from "../Style_Component/Style";
import { useDispatch, useSelector } from "react-redux";
import { handleStep } from "../redux/reducer";

const ThirdStep = ({ formData, handleChange, handleSubmit }) => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.auth);

  const handleBackStep = () => {
    dispatch(handleStep(step - 1));
    console.log("Button clicked!");
  };

  return (
    <Navbar>
      <Paper
        elevation={8}
        style={{ margin: "3rem 3rem", borderRadius: "3rem" }}
      >
        <Typography
          variant="h6"
          style={{
            color: "orange",
            paddingBottom: "1px",
            paddingTop: "30px",
            padding: "4rem",
          }}
        >
          Medical Center Data
        </Typography>
        <Grid container spacing={2} alignItems="center" padding="4rem">
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="state3">State</label>
            </div>
            <TextField
              fullWidth
              id="state3"
              variant="outlined"
              placeholder="Enter your State"
              value={formData.state3}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="city3">City</label>
            </div>
            <TextField
              fullWidth
              id="city3"
              variant="outlined"
              placeholder="Enter your City"
              value={formData.city3}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="postalcode3">Postal Code</label>
            </div>
            <TextField
              fullWidth
              id="postalcode3"
              variant="outlined"
              placeholder="Enter Postal Code"
              value={formData.postalcode3}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="medicalcenter">Medical Center id</label>
            </div>
            <TextField
              fullWidth
              id="medicalcenter"
              variant="outlined"
              placeholder="Medical Center id"
              value={formData.medicalcenter}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="staffid">Staffing Representative id</label>
            </div>
            <TextField
              fullWidth
              multiline
              id="staffid"
              rows={1}
              variant="outlined"
              value={formData.staffid}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="suit">Suit</label>
            </div>
            <TextField
              fullWidth
              multiline
              id="suit"
              rows={1}
              value={formData.suit}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20rem",
            }}
          >
            <BackButton onClick={handleBackStep}>Back</BackButton>
            <OrangeButton onClick={handleSubmit}>Request</OrangeButton>
          </Box>
        </Grid>
      </Paper>
    </Navbar>
  );
};

export default ThirdStep;
