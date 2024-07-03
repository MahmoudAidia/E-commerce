import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./Slider.scss";
import { useState } from "react";
const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  }

  function nextSlide() {
    if (currentSlide === 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  }
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} />
        <img src={data[1]} />
        <img src={data[2]} />
      </div>

      <div className="icons">
        <button className="icon" onClick={prevSlide}>
          <WestIcon />
        </button>
        <button className="icon" onClick={nextSlide}>
          <EastIcon />
        </button>
      </div>
    </div>
  );
}

export default Slider;
