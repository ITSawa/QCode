import { Routes, Route } from "react-router-dom";
import QRCodeGenerator from "../../components/codeGenerator";
import QRCodeDecoder from "../../components/codeDecoder";
import AboutPage from "../../components/aboutPage";
import DocumentationPage from "../../components/documentationPage";
import WelcomePage from "../../components/welcomePage";
import NotFoundPage from "../../components/notFoundPage";

function MainSide() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/incoder" element={<QRCodeGenerator />} />
        <Route path="/decoder" element={<QRCodeDecoder />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default MainSide;
