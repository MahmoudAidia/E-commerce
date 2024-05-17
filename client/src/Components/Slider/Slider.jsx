import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./Slider.scss";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1473445195779-499faea82cb7?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1444076295597-e246c794dc5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        style={{ transform: `translate(-${currentSlide * 100}vw)` }}
      >
        <img src={images[0]} />
        <img src={images[1]} />
        <img src={images[2]} />
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
