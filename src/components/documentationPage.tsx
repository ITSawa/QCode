import React from "react";

function DocumentationPage() {
  return (
    <>
      <div className="info-panel">
        <h1 className="secondary-color">Documentation for QCode</h1>

        <h3 className="secondary-color">Overview</h3>
        <p>
          QCode is a user-friendly QR code generator that allows you to create
          QR codes in both PNG and JPG formats. This application runs entirely
          on the client side and is completely free to use, requiring no server
          interaction.
        </p>

        <hr />

        <h3 className="secondary-color">Features</h3>
        <ul>
          <li>Generate QR codes from text, URLs, or other data.</li>
          <li>Download QR codes in PNG or JPG formats.</li>
          <li>Simple and intuitive interface for ease of use.</li>
          <li>Customization options for your QR codes.</li>
        </ul>

        <hr />

        <h3 className="secondary-color">Getting Started</h3>
        <p>To use QCode, follow these simple steps:</p>
        <ol>
          <li>Enter the information you want to encode into the QR code.</li>
          <li>Customize your QR code as desired.</li>
          <li>Click the "Generate" button to create your QR code.</li>
          <li>Download the generated QR code to your device.</li>
        </ol>

        <hr />

        <h3 className="secondary-color">Support</h3>
        <p>
          If you encounter any issues or have questions about using QCode,
          please reach out for support. We are here to help!
        </p>
      </div>
    </>
  );
}

export default React.memo(DocumentationPage);
