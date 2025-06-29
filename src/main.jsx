import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import App from "./App.jsx";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/StreamVibe/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
