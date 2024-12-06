import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// 国际化i18n
import "./locales/config";
createRoot(document.getElementById("root")!).render(<App />);
