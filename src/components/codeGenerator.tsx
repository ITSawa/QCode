import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import defaultSVG from "../assets/imgs/default.svg";

const QRCodeGenerator = React.memo(() => {
  const [text, setText] = useState("");
  const [qrCodePNGURL, setQrCodePNGURL] = useState("");
  const [qrCodeJPGURL, setQrCodeJPGURL] = useState("");
  const [qrCodeBMPURL, setQrCodeBMPURL] = useState("");
  const [qrCodeSVG, setQrCodeSVG] = useState("");
  const [switchType, setSwitchType] = useState("png");

  useEffect(() => {
    const savedText = localStorage.getItem("text") || "";
    const savedQrCodePNGURL = localStorage.getItem("qrCodePNGURL") || "";
    const savedQrCodeJPGURL = localStorage.getItem("qrCodeJPGURL") || "";
    const savedQrCodeBMPURL = localStorage.getItem("qrCodeBMPURL") || "";
    const savedQrCodeSVG = localStorage.getItem("qrCodeSVG") || "";
    const savedSwitchType = localStorage.getItem("switchType") || "png";

    if (savedText) {
      setText(savedText);
    }
    if (savedQrCodePNGURL) {
      setQrCodePNGURL(savedQrCodePNGURL);
    }
    if (savedQrCodeJPGURL) {
      setQrCodeJPGURL(savedQrCodeJPGURL);
    }
    if (savedQrCodeBMPURL) {
      setQrCodeBMPURL(savedQrCodeBMPURL);
    }
    if (savedQrCodeSVG) {
      setQrCodeSVG(savedQrCodeSVG);
    }
    if (savedSwitchType) {
      setSwitchType(savedSwitchType);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem("qrCodePNGURL", qrCodePNGURL);
  }, [qrCodePNGURL]);

  useEffect(() => {
    localStorage.setItem("qrCodeJPGURL", qrCodeJPGURL);
  }, [qrCodeJPGURL]);

  useEffect(() => {
    localStorage.setItem("qrCodeBMPURL", qrCodeBMPURL);
  }, [qrCodeBMPURL]);

  useEffect(() => {
    localStorage.setItem("qrCodeSVG", qrCodeSVG);
  }, [qrCodeSVG]);

  useEffect(() => {
    localStorage.setItem("switchType", switchType);
  }, [switchType]);

  const textToQRCode = async () => {
    if (text) {
      try {
        const svg = await QRCode.toString(text, { type: "svg" });
        setQrCodeSVG(svg);

        const pngDataUrl = await QRCode.toDataURL(text, {
          width: 256,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
          errorCorrectionLevel: "H",
        });
        setQrCodePNGURL(pngDataUrl);

        const img = new Image();
        img.src = pngDataUrl;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx: any = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const jpgDataUrl = canvas.toDataURL("image/jpeg");
          setQrCodeJPGURL(jpgDataUrl);

          const bmpDataUrl = canvas.toDataURL("image/bmp");
          setQrCodeBMPURL(bmpDataUrl);
        };
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };

  const saveQRCode = () => {
    const link = document.createElement("a");
    if (switchType === "svg") {
      link.download = "qrcode.svg";
      link.href =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(qrCodeSVG);
    } else {
      const fileExtension =
        switchType === "jpg" ? "jpg" : switchType === "bmp" ? "bmp" : "png";
      const qrCodeURL =
        switchType === "png"
          ? qrCodePNGURL
          : switchType === "jpg"
          ? qrCodeJPGURL
          : qrCodeBMPURL;
      link.download = `qrcode.${fileExtension}`;
      link.href = qrCodeURL;
    }
    link.click();
  };

  const switchTypeFunction = () => {
    if (switchType === "svg") {
      setSwitchType("png");
    } else if (switchType === "png") {
      setSwitchType("jpg");
    } else if (switchType === "jpg") {
      setSwitchType("bmp");
    } else {
      setSwitchType("svg");
    }
  };

  return (
    <div className="generator-panel">
      <h2>Text to QR Code</h2>
      <div className="qrcode">
        <div className="qrcode-text">
          <textarea
            value={text}
            onChange={(e) =>
              e.target.value.length <= 500 && setText(e.target.value)
            }
            placeholder="Enter text here"
          />
          <h3 className="max-length">
            max length:
            <span className="secondary-color">{500 - text.length}</span>
          </h3>
          <div className="row">
            <button onClick={textToQRCode}>
              Generate <i className="fa-solid fa-qrcode secondary-color"></i>
            </button>
            <button onClick={switchTypeFunction} style={{ minWidth: "120px" }}>
              {switchType.toUpperCase()}
              <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
        <div>
          {qrCodeSVG && qrCodePNGURL && qrCodeJPGURL && qrCodeBMPURL && (
            <img
              src={qrCodePNGURL}
              alt="Generated QR Code"
              onClick={saveQRCode}
            />
          )}
          {!qrCodeSVG && !qrCodePNGURL && !qrCodeJPGURL && !qrCodeBMPURL && (
            <img src={defaultSVG} alt="" />
          )}
          {(qrCodePNGURL || qrCodeJPGURL || qrCodeSVG || qrCodeBMPURL) && (
            <div>
              <h4>
                Type to download:{" "}
                <span className="secondary-color">
                  {switchType.toUpperCase()}
                </span>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default QRCodeGenerator;
