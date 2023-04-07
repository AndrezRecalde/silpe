import { Provider } from "react-redux";
import { store } from "./store/store";

import "./assets/styles/index.css";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
};
