import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./pages/App.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Landing } from "./pages/Landing.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { RecoilRoot } from "recoil";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RecoilRoot>
            <GoogleOAuthProvider clientId={clientId}>
                <App></App>
            </GoogleOAuthProvider>
        </RecoilRoot>
    </StrictMode>
);
