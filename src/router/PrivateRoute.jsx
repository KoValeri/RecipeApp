import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";

export default function PrivateRoute({ isLogin, children}) {
    if (!isLogin) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
}
