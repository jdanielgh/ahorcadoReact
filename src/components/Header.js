import React from "react";

export default function Header({titulo, year}) {
  return (
    <div className="row">
      <header>
        <div className="col col-lg-6">
          <div className="lh-100">
            <h1 className="mb-0 text-white lh-100">{titulo}</h1>
          </div>
        </div>
      </header>
    </div>
  );
}