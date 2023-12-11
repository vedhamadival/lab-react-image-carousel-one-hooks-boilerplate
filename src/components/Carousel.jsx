import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel(){
    const [count,setCount] = useState(0)

    const handleNext = () => {
        setCount((prevIndex) => (prevIndex + 1) % images.length);
    }

    const handlePrev = () => {
        setCount((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return(
    <div id="Carousel">
        <div id="imageCarousel" style={{backgroundImage:`url(${images[count].img})`}}>

         <div id="left-btn" onClick={handlePrev}>
            <ArrowBackIosIcon/>
        </div>

        <div id="centertext">
        <h1 >{images[count].title}</h1>
        <p>{images[count].subtitle}</p>
        </div>

        <div id="right-btn" onClick={handleNext}>
            <ArrowForwardIosIcon/>
        </div>
        </div>
    </div>
    )
}

export default Carousel;