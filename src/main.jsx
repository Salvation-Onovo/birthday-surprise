import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";

import App from "./App";
import { BirthdayProvider } from "./Components/context/BirthdayContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BirthdayProvider>
    <App />
  </BirthdayProvider>,
);
