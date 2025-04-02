import React, { useState } from "react";
// function for the main content(BMI Calculator)
export default function Calculator(){
  const [weight, setWeight] = React.useState(50)
  const [height, setHeight] = React.useState(160)
  let [result, setResult] = React.useState()
  result = weight/((height/100)*(height/100))
  return (
    <section className="calculator">
      <div className="container">
        <p className="weight-paragraph">Weight: {weight} kg</p>
        <input type="range"
          min={40}
          max={220}
          value={weight}
          onChange={(event)=>setWeight(event.target.value)}
        />
        <p className="height-paragraph">Height: {height} cm</p>
        <input type="range"
          min={140}
          max={220}
          value={height}
          onChange={(event)=>setHeight(event.target.value)}
        />
        <p className="bmi-paragraph">Your BMI is </p>
        <p className="result">{result.toFixed(1)}</p>
      </div>
    </section>
  )
}