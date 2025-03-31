// Importing React library to use JSX and create components
import React from "react";

// Defining the Question functional component as the default export
export default function Question(props) {
  // Using useState hook to manage the visibility of the question info
  const [isShown, setIsShown] = React.useState(false);

  // Rendering the Question component
  return (
    <div className="single-question-container">
      <div className="title-container">
        {/* Rendering the title if it exists (if the left condition is true -> execute right side code*/}
        {props.title && <h3>{props.title}</h3>}
        <button onClick={() => setIsShown(!isShown)}>
          {/* Displaying "-" if the info is shown, otherwise displaying "+" */}
          {isShown ? "-" : "+"}
        </button>
      </div>
      {/* Rendering the question info if isShown is true */}
      {isShown && <p>{props.info}</p>}
    </div>
  );
}
