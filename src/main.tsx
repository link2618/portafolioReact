import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./i18n";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <I18nextProvider i18n={i18n}> */}
            <App />
        {/* </I18nextProvider> */}
    </StrictMode>
);
