import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import { ADDONS_IMAGES } from "../../constant";

const Addons = () => {
  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: "700", color: "#913175" }} variant="h5">
          Recommended Add-Ons
        </Typography>
        <Grid container spacing={2} mt={1}>
          {ADDONS_IMAGES.map((image, id) => {
            return (
              <Grid item spacing={5} sm={6} lg={4} key={id} sx={{ maxWidth: "566px" }}>
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={image}
                  alt="addons"
                ></img>
                <Typography
                  sx={{ fontWeight: "700", color: "#913175" }}
                  variant="h6"
                >
                  SpiceMax
                </Typography>
                <Typography variant="p">
                  With the commencement of our winter schedule, there may be a
                  revision in some of our flights.
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Addons;
