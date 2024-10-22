// import React from "react";
import { Link } from "react-router-dom";

function HeaderSide() {
  return (
    <>
      <header>
        <Link to="/" className="main-label secondary-color">
          QCode<i className="fa fa-qrcode"></i>
        </Link>
        <nav>
          <Link to="/incoder">Encode</Link>
          <Link to="/decoder">Decode</Link>
          <Link to="/about">About</Link>
          <Link to="/documentation">Documentation</Link>
        </nav>
      </header>
    </>
  );
}

export default HeaderSide;
