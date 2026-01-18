import { Navigate } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children}) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
}
