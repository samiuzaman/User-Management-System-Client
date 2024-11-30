import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import NewUsers from "./Pages/NewUsers";
import AllUsers from "./Pages/AllUsers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllUsers />} />
          <Route path="newusers" element={<NewUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
