// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FooterSide from "./pages/sides/Footer";
import HeaderSide from "./pages/sides/Header";
import MainSide from "./pages/sides/Main";
import StartedAnimation from "./components/staredAnimation";

import "./assets/scss/index.scss";
// import "./assets/scss/header.scss";
// import "./assets/scss/main.scss";
// import "./assets/scss/footer.scss";

function App() {
  return (
    <Router>
      <StartedAnimation />
      <HeaderSide />
      <MainSide />
      <FooterSide />
    </Router>
  );
}

export default App;
