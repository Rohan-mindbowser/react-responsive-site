import { Box } from "@mui/material";
import React from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation } from "swiper";
import { HOME_IMAGE_SLIDER } from "../../constant";
import SearchFlights from "../Search flights/SearchFlights";

const Homeslider = () => {
  register();
  return (
    <Box mt={8} sx={{ position: "relative" }}>
      <Swiper
        autoplay={true}
        navigation={true}
        modules={[Navigation]}
        effect={"fade"}
        className="mySwiper"
      >
        {HOME_IMAGE_SLIDER.map((image, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={image} alt="slider" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
        //   position: "absolute",
        //   top: "90%",
        //   zIndex: "99",
          width: "100%",
        }}
      >
        <SearchFlights />
      </Box>
    </Box>
  );
};

export default Homeslider;
