import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";

export default function PublicRoute({ isLogin }) {
    if (isLogin) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <Outlet />; 
}
