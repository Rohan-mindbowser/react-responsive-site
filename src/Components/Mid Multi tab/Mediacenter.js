import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";

const Mediacenter = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <div className="addons_container">
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            Enjoy ADDONS at
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Upto 25% Off</Typography>
            <img
              src="https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/DealsPromotions/sjlogo.png"
              alt="logo"
            ></img>
          </Box>
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            ADDON25
          </Typography>
          <Typography sx={{ color: "grey" }} variant="p">
            Valid till March 31, 2023
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <div className="addons_container">
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            Enjoy ADDONS at
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Upto 25% Off</Typography>
            <img
              src="https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/DealsPromotions/sjlogo.png"
              alt="logo"
            ></img>
          </Box>
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            ADDON25
          </Typography>
          <Typography sx={{ color: "grey" }} variant="p">
            Valid till March 31, 2023
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <div className="addons_container">
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            Enjoy ADDONS at
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Upto 25% Off</Typography>
            <img
              src="https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/DealsPromotions/sjlogo.png"
              alt="logo"
            ></img>
          </Box>
          <Typography sx={{ fontWeight: "700" }} mb={2}>
            ADDON25
          </Typography>
          <Typography sx={{ color: "grey" }} variant="p">
            Valid till March 31, 2023
          </Typography>
        </div>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        mt={2}
      >
        <Button variant="contained">Explore more</Button>
      </Box>
    </Grid>
  );
};

export default Mediacenter;
