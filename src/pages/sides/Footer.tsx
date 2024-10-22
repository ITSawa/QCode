// import React from "react";

function FooterSide() {
  return (
    <>
      <footer className="row">
        <label className="secondary-color" htmlFor="">
          QCode
        </label>
        <p>
          Project made with{" "}
          <i style={{ color: "#f57754" }} className="fa-solid fa-heart"></i> for
          fun
        </p>
        <div>
          <a href="https://github.com/ITSawa">
            My github <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p className="all-rights">All rights reserved &copy;</p>
      </footer>
    </>
  );
}

export default FooterSide;
