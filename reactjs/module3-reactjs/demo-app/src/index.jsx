import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OurServices from "./components/ServicesApp";
import './assets/css/style.css'
const root=createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <OurServices />
    </StrictMode>
)