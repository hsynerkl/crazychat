import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Page404 from '../pages/Page404';
import AuthLayout from '../layout/AuthLayout';
import Layout from '../layout/Layout';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<AuthLayout />} >
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Route>
                    <Route path="/*" element={<Page404 />} />s
                </Routes>
            </BrowserRouter>

        </>
    )
}