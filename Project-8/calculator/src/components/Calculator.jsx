import React from "react";

export default function Calculator(){
  let [value, setValue] = React.useState()
  function addToValue(){

  }
  return (
    <>
      <div>
        <p className="input-paragraph">{value}</p>
      </div>
      <div className="top-buttons">
        <button>
          7
        </button>
        <button>
          8
        </button>
        <button>
          9
        </button>
        <button>
          Del
        </button>
        <button>
          4
        </button>
        <button>
          5
        </button>
        <button>
          6
        </button>
        <button>
          +
        </button>
        <button>
          1
        </button>
        <button>
          2
        </button>
        <button>
          3
        </button>
        <button>
          -
        </button>
        <button>
          ,
        </button>
        <button>
          0
        </button>
        <button>
          /
        </button>
        <button>
          *
        </button>
      </div>
      <div className="bottom-buttons">
      <button>
          Reset
        </button>
        <button>
          =
        </button>
      </div>
    </>
  )
}
// 7 8 9 Del
// 4 5 6 +
// 1 2 3 -
// , 0 / *
// R R = =