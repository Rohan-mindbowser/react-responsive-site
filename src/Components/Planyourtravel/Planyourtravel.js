import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const Planyourtravel = () => {
  return (
    <Box
      py={5}
    >
      <Typography sx={{ fontWeight: "700", color: "#913175" }} variant="h5">
        Plan your travel
      </Typography>
      <Grid container spacing={1} sx={{marginLeft:"auto"}}>
        <Grid item sm={6} lg={3}>
          1
        </Grid>
        <Grid item sm={6} lg={3}>
          1
        </Grid>
        <Grid item sm={6} lg={3}>
          1 
        </Grid>
        <Grid item sm={6} lg={3}>
          1
        </Grid>
      </Grid>
    </Box>
  );
};

export default Planyourtravel;
