import React from "react";

function AboutPage() {
  return (
    <>
      <div className="info-panel">
        <h1 className="secondary-color">About QCode</h1>

        <h3 className="secondary-color">What is QCode?</h3>
        <p>
          QCode is a fun and easy-to-use QR code generator that allows users to
          create QR codes in PNG and JPG formats. Whether you want to share
          links, texts, or other information, QCode makes it simple to generate
          scannable codes.
        </p>

        <hr />

        <h3 className="secondary-color">How does it work?</h3>
        <p>
          With QCode, you can easily customize your QR codes and download them
          directly to your device. This application was developed for fun,
          combining creativity and utility in one neat package.
        </p>

        <hr />

        <h3 className="secondary-color">How can I use it?</h3>
        <p>
          Get started by entering the information you want to encode, and let
          QCode do the rest. Share your codes with friends, family, or use them
          for your personal projects!
        </p>
      </div>
    </>
  );
}

export default React.memo(AboutPage);
