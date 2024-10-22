import React, { useState, useEffect } from "react";
import jsQR from "jsqr";
import defaultSVG from "../assets/imgs/default.svg";

const QRCodeDecoder = React.memo(() => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const savedText = localStorage.getItem("decodedText") || "";
    if (savedText) {
      setText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("decodedText", text);
  }, [text]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageUrl(result);
        if (file.type === "image/svg+xml") {
          decodeSvg(result);
        } else {
          decodeImage(result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const decodeSvg = (svgDataUrl: string) => {
    const svgData = atob(svgDataUrl.split(",")[1]);
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgData, "image/svg+xml");
    const svg = doc.querySelector("svg");

    if (svg) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const svgBlob = new Blob([new XMLSerializer().serializeToString(svg)], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.onload = () => {
        if (context) {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);
          const imageData = context.getImageData(
            0,
            0,
            image.width,
            image.height
          );
          decodeQrCode(imageData);
        }
        URL.revokeObjectURL(url);
      };
      image.src = url;
    }
  };

  const decodeImage = (imageDataUrl: string) => {
    const image = new Image();
    image.src = imageDataUrl;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        decodeQrCode(imageData);
      }
    };
  };

  const decodeQrCode = (imageData: ImageData) => {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      setText(code.data);
    } else {
      setText("QR Code not found");
    }
  };

  const handleDivClick = () => {
    document.getElementById("fileInput")?.click();
  };

  return (
    <div className="decoder-panel">
      <h2>Decode QR Code</h2>
      <div className="decoder-grid-box">
        <div className="to-upload" onClick={handleDivClick}>
          {imageUrl && <img src={imageUrl} alt="" />}
          {!imageUrl && <img src={defaultSVG} alt="" />}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">Load File</label>
        </div>
        <div className="after-decode">
          <textarea value={text} readOnly />
          {file && <p>Selected file: {file.name}</p>}{" "}
        </div>
      </div>
    </div>
  );
});

export default QRCodeDecoder;
