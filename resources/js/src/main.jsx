import { App } from "./App";
import { createRoot } from "react-dom/client";


if(document.getElementById("root")){
    const Index = createRoot(document.getElementById("root"));

    Index.render(
        <App />
    );
}
