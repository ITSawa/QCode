import defaultSVG from "../assets/imgs/default.svg";

function welcomePage() {
  return (
    <>
      <div className="welcome-panel">
        <div className="presintation">
          <div>
            <a href="https://github.com/ITSawa" target="_blank">
              <img src={defaultSVG} alt="Default" />
            </a>
          </div>
          <div>
            <h1 className="secondary-color">QCode</h1>
            <p>
              This is a free application designed to encode and decode QR codes.
            </p>
            <hr />
            <p className="made-with-love">
              Made with <i className="secondary-color fa-solid fa-heart"></i> by
              ITSawa {":)"}
            </p>
          </div>
        </div>
        <hr style={{ margin: "2rem" }} />
        <div className="features-panel">
          <h1 className="secondary-color">Features</h1>
          <ul className="features">
            <li>
              <i className="fa-solid fa-code"></i> QR Code generator
            </li>

            <li>
              <i className="fa-solid fa-download"></i> Download QR codes
            </li>
            <li>
              <i className="fa-solid fa-code"></i> QR Code decoder
            </li>
            <li>
              <i className="fa-solid fa-code"></i> QR Code encoder
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default welcomePage;
