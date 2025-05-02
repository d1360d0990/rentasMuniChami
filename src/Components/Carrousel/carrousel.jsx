// src/components/CarouselCatalogo.jsx
import React from "react";
import Slider from "react-slick";
import {Box,Card,CardMedia,Typography,Button,CardActions,} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EdiMuni1 from "../../../src/assets/images/EdiMuni1.jpg";
import Dorita from "../../../src/assets/images/Dorita.jpg";
import ChamicalCartel from "../../../src/assets/images/ChamicalCartel.jpg";


const items = [
  { title: "Edificio Municipal", image: EdiMuni1 },
  { title: "Intendente: Dora Rodriguez", image: Dorita },
  { title: "Cartel Chamical", image: ChamicalCartel },
];

export default function CarouselCatalogo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }
   

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 4, mb: 6 }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index} sx={{ mx: 1, position: "relative" }}>
            <CardMedia
              component="img"
              height="250"
              image={item.image}
              alt={item.title}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 1,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                p: 2,
              }}
            >
              <Typography variant="h6">{item.title}</Typography>
            </Box>
            
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
