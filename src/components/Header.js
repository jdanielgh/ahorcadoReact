import React from "react";

export default function Header({ titulo }) {

  return (
    <div className="row justify-content-md-center" >
      <div>
        <div className="align-center">
          <h1 className="aling-center">{titulo}</h1>
        </div>
      </div>
  </div>
  );
}