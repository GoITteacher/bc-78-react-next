import { createRoot } from "react-dom/client";

import "./global.css";

import "modern-normalize";

import App from "./components/App";

createRoot(document.querySelector("#root") as HTMLDivElement).render(<App />);
