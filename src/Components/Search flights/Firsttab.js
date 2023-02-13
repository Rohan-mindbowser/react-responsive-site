import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";

const Firsttab = () => {
  const [dateValue, setdateValue] = useState(dayjs(moment().format()));
  const [returnDateValue, setReturndateValue] = useState(
    dayjs(moment().format())
  );

  const handleDateChange = (newValue) => {
    setdateValue(newValue);
  };

  const handleRetunDateChange = (newValue) => {
    setReturndateValue(newValue);
  };
  return (
    <Grid mt={1} container spacing={2}>
      <Grid item sm={4} lg={3}>
        <TextField
          id="outlined-basic"
          label="Origin"
          variant="outlined"
          sx={{ width: "100%", borderColor: "red" }}
        />
      </Grid>
      <Grid item sm={4} lg={3}>
        <TextField
          id="outlined-basic"
          label="Destination"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item sm={4} lg={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            className="date_picker"
            label="Departure date"
            inputFormat="MM/DD/YYYY"
            value={dateValue}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item sm={4} lg={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            className="date_picker"
            label="Return date"
            inputFormat="MM/DD/YYYY"
            value={returnDateValue}
            onChange={handleRetunDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item md={6}>
        <TextField
          id="outlined-basic"
          label="Passengers"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item md={3}>
        <TextField
          id="outlined-basic"
          label="Promo code"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item md={3}>
        <Button variant="contained" sx={{ width: "100%", height: "61px" }}>
          Search Flights
        </Button>
      </Grid>
    </Grid>
  );
};

export default Firsttab;
