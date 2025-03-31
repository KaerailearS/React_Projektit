import { useState } from "react";
// array with image sources
const imageArray = [
  "/src/assets/manuli.png",
  "/src/assets/kirahvi.png",
  "/src/assets/koira.png",
  "/src/assets/virtahepo.png",
  "/src/assets/ankka.png"
]
// function for the main content(carousel)
export default function Carousel(){
  const [currentSlide, setCurrentSlide] = useState(0)
  // functionality for the button to go forward one image
  const next = ()=>{
    setCurrentSlide((prevSlide)=>
    prevSlide === imageArray.length - 1 ? 0 : prevSlide + 1
  )
  }
  // functionality for the button to go backwards one image
  const prev = ()=>{
    setCurrentSlide((prevSlide)=>
    prevSlide === 0 ? imageArray.length - 1 : prevSlide - 1
  )
  }

  return (
    <section className="carousel">
      <div className="prev">
        <button className="prev-btn" onClick={prev}>-</button>
      </div>
      <div className="next">
        <button className="next-btn" onClick={next}>+</button>
      </div>
      <div className="image">
        <img src={imageArray[currentSlide]} alt="" />
      </div>
    </section>
  )
}