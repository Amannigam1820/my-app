import React from "react";
import { Paper, Grid, TextField, Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { OrangeButton, BackButton } from "../Style_Component/Style";
import { useDispatch, useSelector } from "react-redux";
import { handleStep } from "../redux/reducer";

const SecondStep = ({ formData, handleChange }) => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.auth);

  const handleIncreaseStep = () => {
    dispatch(handleStep(step + 1));
    console.log("Button clicked!");
  };

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
          Supervisor Data
        </Typography>
        <Grid container spacing={2} alignItems="center" padding="4rem">
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="state2">State</label>
            </div>
            <TextField
              fullWidth
              id="state2"
              variant="outlined"
              placeholder="Enter your State"
              value={formData.state2}
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
              <label htmlFor="city2">City</label>
            </div>
            <TextField
              fullWidth
              id="city2"
              variant="outlined"
              placeholder="Enter your City"
              value={formData.city2}
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
              <label htmlFor="hotel2">Hotel</label>
            </div>
            <TextField
              fullWidth
              id="hotel2"
              variant="outlined"
              placeholder="Enter your Hotel id"
              value={formData.hotel2}
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
              <label htmlFor="postalcode2">Postal Code</label>
            </div>
            <TextField
              fullWidth
              id="postalcode2"
              variant="outlined"
              placeholder="Enter Postal Code"
              value={formData.postalcode2}
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
              <label htmlFor="supervisior">Supervisor id</label>
            </div>
            <TextField
              fullWidth
              id="supervisior"
              variant="outlined"
              placeholder="Enter  Your Supervisor id"
              value={formData.supervisior}
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
              <label htmlFor="four">Number of Four</label>
            </div>
            <TextField
              fullWidth
              id="four"
              variant="outlined"
              placeholder="Enter Number of Four"
              value={formData.four}
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
              <label htmlFor="bodyinjured">
                What Part Of The Body Were Injured(Left Side, Right Side)
              </label>
            </div>
            <TextField
              fullWidth
              multiline
              id="bodyinjured"
              rows={1}
              variant="outlined"
              value={formData.bodyinjured}
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
              <label htmlFor="damage">
                What Kind Of Damage? (Cut, Twist,Break,etc.)
              </label>
            </div>
            <TextField
              fullWidth
              multiline
              id="damage"
              rows={1}
              variant="outlined"
              value={formData.damage}
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
              <label htmlFor="reason">
                Do You Have Any Reason To Believe That This Claim is it
                Questionable
              </label>
            </div>
            <TextField
              fullWidth
              multiline
              id="reason"
              rows={1}
              variant="outlined"
              value={formData.reason}
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
              <label htmlFor="answer">
                If The Answer is Yes, Please Explain
              </label>
            </div>
            <TextField
              fullWidth
              multiline
              id="answer"
              rows={1}
              variant="outlined"
              value={formData.answer}
              onChange={handleChange}
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
            <OrangeButton onClick={handleIncreaseStep}>Next</OrangeButton>
          </Box>
        </Grid>
      </Paper>
    </Navbar>
  );
};

export default SecondStep;
