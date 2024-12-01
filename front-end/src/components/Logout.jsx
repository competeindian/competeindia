import React, { useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonPri, ButtonSec } from "./Buttons";
import { userInfoAtom } from "../atoms/user.atom";
import { googleLogout } from "@react-oauth/google";

export const Logout = ({ className }) => {
    const user = useRecoilValue(userInfoAtom);
    const resetUser = useResetRecoilState(userInfoAtom);
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const HandleLogOut = async () => {
        setLoading(true);
        try {
            await axios.get("http://localhost:3000/api/auth/logout", {
                // withCredentials: true,
            });

            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            resetUser();
            navigate("/login");
            setLoading(false);
            console.log(localStorage);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <ButtonSec
                className={`p-1 px-2 m-3 cursor-pointer md:text-xl rounded-lg border-b-2 border-transparent hover:rounded-b-none hover:border-third-bg ${className}`}
                handleClick={() => {
                    user?.loginMethd === "google" && googleLogout();
                    HandleLogOut();
                }}
            >
                {Loading ? "Loading.." : "Log Out"}
            </ButtonSec>
        </div>
    );
};
