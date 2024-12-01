import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./Login.jsx";
import { Signup } from "./Signup.jsx";
import { Landing } from "./Landing.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import { Navbar } from "../components/Navbar.jsx";
import ExamDetailts from "./ExamDetailts.jsx";
import TestScreen from "./TestScreen.jsx";
import Error from "./Error.jsx";
import Status from "../components/Status.jsx";
import { ToastContainer, toast } from "react-toastify";
import { RecoilRoot, useRecoilValue } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard.jsx";
import { Profile } from "./Profile.jsx";
import { userInfoAtom } from "../atoms/user.atom.js";
// import { AdminPage } from "./Admin.jsx";

export const notify = (status, message, position) => {
    toast[status](message, {
        position: position,
    });
};
const App = () => {
    const userInfInBrowser = JSON.parse(localStorage?.getItem("user"));
    const user = useRecoilValue(userInfoAtom);
    console.log(user);

    const [isLogedIn, setIsLogedIn] = useState(true);
    useEffect(() => {
        if (userInfInBrowser || user?.username) {
            setIsLogedIn(true);
        } else {
            setIsLogedIn(false);
        }
    }, [user]);

    return (
        <main>
            <BrowserRouter>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                        path="/login"
                        element={
                            !isLogedIn ? (
                                <Login />
                            ) : (
                                <Navigate to={"/dashboard"}></Navigate>
                            )
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/status" element={<Status />} />
                    {/* --protected--- */}
                    <Route path={`/test-details?`} element={<ExamDetailts />} />
                    <Route
                        path={`/dashboard`}
                        element={
                            <Dashboard />
                            // isLogedIn ? (
                            // ) : (
                            //     <Navigate to={"/login"} />
                            // )
                        }
                    />
                    <Route path={`/take-test`} element={<TestScreen />} />
                    <Route path={`/profile`} element={<Profile />} />
                    {/* <Route path={`/admin`} element={<AdminPage />} /> */}
                </Routes>
            </BrowserRouter>
        </main>
    );
};
export default App;
