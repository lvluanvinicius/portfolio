import { BrowserRouter } from "react-router-dom";

// Routes
import AppRoutes from "./app.routes";

// Layout App
import LayoutApp from "../layout";

export default function Routers () {
    return (
        <BrowserRouter>
            <LayoutApp>
                <AppRoutes />
            </LayoutApp>
        </BrowserRouter>
    )
}