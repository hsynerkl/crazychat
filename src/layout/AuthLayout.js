import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from '../config/hooks';

export default function AuthLayout() {

    const isLoggedIn = useIsLoggedIn();
    if (isLoggedIn === true) return <Navigate replace to="/" />

    return (
        <>
            <Outlet />
        </>
    )

}