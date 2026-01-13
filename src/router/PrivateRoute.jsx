import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";

export default function PrivateRoute({ isLogin }) {
    if (!isLogin) {
        return <Navigate to={ROUTES.PUBLICK} replace />;
    }

    return <Outlet />;
}
