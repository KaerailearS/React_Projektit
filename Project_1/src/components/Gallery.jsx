import React from "react"
import Ankka from "../assets/ankka.png"
import Kirahvi from "../assets/kirahvi.png"
import Koira from "../assets/koira.png"
import Manuli from "../assets/manuli.png"
import Virtahepo from "../assets/virtahepo.png"

const imageArray = [
  {src: Ankka},
  {src: Kirahvi},
  {src: Koira},
  {src: Manuli},
  {src: Virtahepo}
];

const Gallery = ({imageArray})=>{
  return (
    <div className="gallery">
      {imageArray.map((img, index)=>(
        <img key={index} src={img.src} className="gallery-image"></img>
      ))}
    </div>
  )
}
export default Gallery;
/*
export default function Gallery(){
  const imageArray = [{src: Ankka}, {src: Kirahvi}, {src: Koira}, {src: Manuli}, {src: Virtahepo}];
  let [currentSlideNumber, slideNumber] = React.useState()
  function handleNext(){
    slideNumber(currentSlideNumber+1);
  }
  function handlePrev(){
    slideNumber(currentSlideNumber-1)
  }
  return (
    <section className="gallery-section">
      <div className="slides">
        <div className="prev"><button onClick={handlePrev}>-</button></div>
        <div className="next"><button onClick={handleNext}>+</button></div>
        <div className="images"><img src="../../assets/virtahepo.png" alt="" /></div>
      </div>
    </section>
  )
}

let mobileSlideIndex = 0;
mobileShowSlides();
function mobileShowSlides() {
  const mobileSlides = document.getElementsByClassName("mobile-gallery-slide");
  for (let i = 0; i < mobileSlides.length; i++) {
    mobileSlides[i].style.display = "none";
  }
  mobileSlideIndex++;
  if (mobileSlideIndex > mobileSlides.length) {
    mobileSlideIndex = 1;
  }
  mobileSlides[mobileSlideIndex - 1].style.display = "block";
}
function mobileChangeSlide(n) {
  mobileSlideIndex += n;
  const mobileSlides = document.getElementsByClassName("mobile-gallery-slide");
  if (mobileSlideIndex > mobileSlides.length) {
    mobileSlideIndex = 1;
  }
  if (mobileSlideIndex < 1) {
    mobileSlideIndex = mobileSlides.length;
  }
  for (let i = 0; i < mobileSlides.length; i++) {
    mobileSlides[i].style.display = "none";
  }
  mobileSlides[mobileSlideIndex - 1].style.display = "block";
}

*/