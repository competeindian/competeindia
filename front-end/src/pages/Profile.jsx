import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputField } from "../components/InputField";
import { Logout } from "../components/Logout";
import { ButtonSec, SubmitButton } from "../components/Buttons";

export const Profile = () => {
    // Assuming user info is stored in localStorage
    const user = JSON.parse(localStorage.getItem("userInfo"));

    // State to store user data from backend
    const [userData, setUserData] = useState({});

    // Fetch user data from the backend when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("token"));

                const res = await axios.get("http://localhost:3000/api/user/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserData(res.data); // Update state with user data
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleUpdateProfile = () => {
        // Placeholder for handling profile update (password change, etc.)
        console.log("Profile updated!");
    };

    const handleDeleteAccount = () => {
        // Placeholder for handling account deletion
        console.log("Account deleted!");
    };

    return (
        <div className="profile-page">
            <p className="text-center text-text-1 text-4xl">Profile</p>
            <div className="max-w-lg mx-auto flex flex-col p-4 bg-fourth-bg shadow-md rounded-lg">
                {/* Profile Image */}
                <div className="text-center">
                    <img
                        className="h-32 w-32 shadow-md m-4 rounded-full object-cover self-center"
                        src={userData?.imageUrl || user?.imageUrl}
                        alt="Profile Picture"
                    />
                </div>

                {/* User Info */}
                <InputField
                    value={userData?.username || user?.username}
                    type="text"
                    label="Username"
                    readOnly
                />
                {user?.email ? (
                    <InputField value={user?.email} type={"text"} />
                ) : null}
                {userData?.email && (
                    <InputField
                        value={userData?.email || user?.email}
                        type="text"
                        label="Email"
                        readOnly
                    />
                )}

                {/* Change Password Field */}
                {/* <InputField type="password" label="Change Password" value="" /> */}

                {/* Update Profile Button */}
                {/* <SubmitButton label="Update" onClick={handleUpdateProfile} /> */}

                <div className="flex justify-between mt-6">
                    {/* Delete Account Button */}
                    {/* <SubmitButton
                        label="Delete Account"
                        className="bg-red-600 text-white hover:bg-red-700"
                        onClick={handleDeleteAccount}
                    /> */}
                    {/* Logout Button */}
                    <Logout className={"hover:rounded-b-lg"} />
                </div>
            </div>
        </div>
    );
};
