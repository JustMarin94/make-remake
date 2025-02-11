import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import image1 from "../components/images/home1.jpg";
import image2 from "../components/images/home2.jpg";
import image3 from "../components/images/home3.jpg";
import image4 from "../components/images/project2.jpg";
import image5 from "../components/images/project3.jpg";

const ImageCarousel = () => {
  const images = [
    {
      src: image1,
      title: "Home1",
    },
    { src: image2, title: "City" },
    {
      src: image3,
      title: "Technology",
    },
    { src: image4, title: "Ocean" },
    {
      src: image5,
      title: "Mountains",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        mt: 3,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Galerija
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        style={{ borderRadius: "10px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia
                component="img"
                image={image.src}
                alt={image.title}
                sx={{ height: 300 }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageCarousel;
