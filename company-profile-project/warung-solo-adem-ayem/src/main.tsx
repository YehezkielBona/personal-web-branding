import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* BrowserRouter = "aktifkan" fitur routing di seluruh app */}
    <BrowserRouter>
      {/* AuthProvider = "aktifkan" status login yang bisa diakses
          semua halaman di dalamnya (App dan semua children-nya) */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);