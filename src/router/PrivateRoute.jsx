import { Navigate } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";

export default function PrivateRoute({ children}) {
    const userJSON = localStorage.getItem("user");
    const user = userJSON ? JSON.parse(userJSON) : null;
    const isAuthenticated = user ? user.isAuthenticated : false;

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
}
