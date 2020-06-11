import React from "react";

export default function Header({titulo, year}) {

  const style = {
    border: '2px solid black'
  }
  return (
    <div className="row" style={style}>
      <header>
        <div>
          <div className="lh-100">
            <h1>{titulo}</h1>
          </div>
        </div>
      </header>
    </div>
  );
}