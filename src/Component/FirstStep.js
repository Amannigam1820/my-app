import { Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrangeButton } from "../Style_Component/Style";
import { handleStep } from "../redux/reducer";
import Navbar from "./Navbar";

const FirstStep = ({ formData, handleChange }) => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.auth);

  const currencies = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const handleIncreaseStep = () => {
    // Handle click logic here
    dispatch(handleStep(step + 1));
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
          Employee Data
        </Typography>
        <Grid container spacing={2} alignItems="center" padding="4rem">
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="fullName">Full Name</label>
            </div>
            <TextField
              fullWidth
              id="fullName"
              variant="outlined"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="telephone">Telephone Contact</label>
            </div>
            <TextField
              fullWidth
              id="telephone"
              variant="outlined"
              placeholder="Enter your Phone NO"
              value={formData.telephone}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="state">State</label>
            </div>
            <TextField
              fullWidth
              id="state"
              variant="outlined"
              placeholder="Enter your State"
              value={formData.state}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="city1">City</label>
            </div>
            <TextField
              fullWidth
              id="city1"
              variant="outlined"
              placeholder="Enter your City"
              value={formData.city1}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="hotel1">Hotel</label>
            </div>
            <TextField
              fullWidth
              id="hotel1"
              variant="outlined"
              placeholder="Enter Hotel Name"
              value={formData.hotel1}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="social">Social Security</label>
            </div>
            <TextField
              fullWidth
              id="social"
              variant="outlined"
              placeholder="Enter your Social Security"
              value={formData.social}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              <label htmlFor="date1">Date</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="date"
                id="date1"
                value={formData.date1}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 50,
                  marginRight: 10,
                  border: "1px solid orange",
                  borderRadius: 5,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    fontSize: 16,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="empAdd">Employee Address</label>
            </div>
            <TextField
              fullWidth
              id="empAdd"
              variant="outlined"
              placeholder="Enter your Address"
              value={formData.empAdd}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="gender">Gender</label>
            </div>
            <TextField
              id="gender"
              Select
              defaultValue="Male"
              variant="outlined"
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
              fullWidth
              value={formData.gender}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="postalcode">Postal Code</label>
            </div>
            <TextField
              fullWidth
              id="postalcode"
              variant="outlined"
              placeholder="Postal Code"
              value={formData.postalcode}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="civilstatus">Civil status</label>
            </div>
            <TextField
              fullWidth
              id="civilstatus"
              variant="outlined"
              placeholder="Enter your Civil status"
              value={formData.civilstatus}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="degree">Degree</label>
            </div>
            <TextField
              fullWidth
              id="degree"
              variant="outlined"
              placeholder="Enter your Degree"
              value={formData.degree}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              <label htmlFor="date2">Date of Hire</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="date"
                id="date2"
                value={formData.date2}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 50,
                  marginRight: 10,
                  border: "2px solid #FFA500",
                  borderRadius: 5,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    fontSize: 16,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="salary">Salary</label>
            </div>
            <TextField
              fullWidth
              id="salary"
              variant="outlined"
              placeholder="Enter your Salary"
              value={formData.salary}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="avgHour">Average Hours Per Week</label>
            </div>
            <TextField
              fullWidth
              id="avgHour"
              variant="outlined"
              placeholder="Enter your Hours Per Week"
              value={formData.avgHour}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="posTitle">Position Title Second Job</label>
            </div>
            <TextField
              fullWidth
              id="posTitle"
              variant="outlined"
              placeholder="Enter your Job Title"
              value={formData.posTitle}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="company">Company Name</label>
            </div>
            <TextField
              fullWidth
              id="company"
              variant="outlined"
              placeholder="Enter your Company Name"
              value={formData.company}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="responsibility">Responsibity</label>
            </div>
            <TextField
              fullWidth
              id="responsibility"
              variant="outlined"
              value={formData.responsibility}
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
              <label htmlFor="incidentdetail">Incident Detail</label>
            </div>
            <TextField
              fullWidth
              id="incidentdetail"
              multiline
              rows={4}
              variant="outlined"
              value={formData.incidentdetail}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginBottom: 5 }}>
              <label htmlFor="incidate">Date of Incident</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="date"
                id="incidate"
                value={formData.incidate}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 50,
                  marginRight: 10,
                  border: "2px solid #FFA500",
                  borderRadius: 5,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    fontSize: 16,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="tdate">Todays dates</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="date"
                id="tdate"
                value={formData.tdate}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 50,
                  border: "2px solid #FFA500",
                  borderRadius: 5,
                  marginRight: 10,
                }}
              />
            </div>
          </Grid>

          <Grid item xs={6} container spacing={2} alignItems="center">
            <div style={{ marginBottom: -10 }}>
              <label htmlFor="dates">incident time</label>
            </div>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                id="incidenthours"
                label="Hours"
                type="Hours"
                margin="normal"
                variant="outlined"
                value={formData.incidenthours}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                label="Minutes"
                type="Minutes"
                id="incidentminutes"
                margin="normal"
                variant="outlined"
                value={formData.incidentminutes}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                label="Period"
                id="incidentperiods"
                type="Period"
                margin="normal"
                value={formData.incidentperiods}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={6} container spacing={2} alignItems="center">
            <div style={{ marginBottom: -10 }}>
              <label htmlFor="datess">Start Time Shift</label>
            </div>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                label="Hours"
                type="Hours"
                id="starthours"
                margin="normal"
                variant="outlined"
                value={formData.starthours}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                label="Minutes"
                type="Minutes"
                id="startminutes"
                margin="normal"
                variant="outlined"
                value={formData.startminutes}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                fullWidth
                label="Period"
                type="Period"
                id="startperiods"
                margin="normal"
                variant="outlined"
                value={formData.startperiods}
                onChange={handleChange}
                sx={{
                  border: "1px solid orange",
                  borderRadius: "4px",
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: 5 }}>
              {" "}
              <label htmlFor="haveworker">
                Have Had Worker's Compensation Claims Previuos
              </label>
            </div>
            <TextField
              fullWidth
              multiline
              id="haveworker"
              rows={4}
              variant="outlined"
              value={formData.haveworker}
              onChange={handleChange}
              sx={{
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            />
          </Grid>

          <OrangeButton onClick={handleIncreaseStep}>Next</OrangeButton>
        </Grid>
      </Paper>
    </Navbar>
  );
};

export default FirstStep;
