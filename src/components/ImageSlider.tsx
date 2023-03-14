import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Images from "../Data/Slider.json";

import "./ImageSlider.css";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const length = Images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaRegArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaRegArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </motion.div>

      {Images.map((image, index) => {
        return (
          <div
            className="image"
            style={{
              backgroundImage: `url(${index === current ? image.img : null})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        );
      })}
    </div>
  );
}
