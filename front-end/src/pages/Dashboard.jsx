import React from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atoms/user.atom";
// import RenderHTML from "../components/RenderHtml";
// import DBV from "../components/DBV";
import Overview from "../components/Overview";

const Dashboard = () => {
    const user = useRecoilValue(userInfoAtom);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return (
        <section className="text-text-1">
            <Overview />
        </section>
    );
};

export default Dashboard;
