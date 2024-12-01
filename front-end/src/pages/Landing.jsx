import React from "react";
import { Navbar } from "../components/Navbar";
import { NavigateButton } from "../components/NavigateButton";
import { Footer } from "../components/Footer";
import { ButtonPri, ButtonSec } from "../components/Buttons";
import { Card } from "../components/Card";
import Status from "../components/Status";
import { Link } from "react-router-dom";

export const Landing = () => {
    const exams = [
        {
            _id: "123",
            examName: "exam 1",
            examdescription: "loass afk sjk kj sfjkd sjkfg sf fj",
            maxMarks: "100",
            examAvatar: "",
        },
        {
            _id: "234",
            examName: "exam 2",
            examdescription: "Efwsf dfef wef ",
            maxMarks: "100",
            examAvatar: "",
        },
        {
            _id: "345",
            examName: "exam 3",
            examdescription: "wefwef f sdsdf affd ag adg",
            maxMarks: "100",
            examAvatar: "",
        },
        {
            _id: "456",
            examName: "exam 4",
            examdescription: "esdfg sfd greg rgzfg sfdgsgsfdgdfsg sfgg dfg sfg",
            maxMarks: "100",
            examAvatar: "",
        },
    ];
    return (
        <main className="bg-main-bg text-text-1  ">
            <section
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg')", // Replace with your image URL
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                {/* Overlay to make text stand out */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                        Discover amazing content and solutions. Join us and be
                        part of something great.
                    </p>
                    <div className="flex">
                        <ButtonSec>Get Started</ButtonSec>
                    </div>
                </div>
            </section>
            <section className="grid ">
                <div className="text-2xl font-bold text-center p-6 m-3">
                    Exams
                </div>
                <div className="flex justify-evenly flex-wrap">
                    {exams.length > 0 &&
                        exams.map((exam) => {
                            return (
                                <Card
                                    key={exam._id}
                                    title={exam.examName}
                                    description={exam.examdescription}
                                    image={
                                        "https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg"
                                    }
                                    buttonText={"Take Test"}
                                />
                            );
                        })}
                </div>
                <ButtonSec className={"w-[40%] mx-auto  m-3 text-center"}>
                    <Link to={"/test-details"}>See More..</Link>
                </ButtonSec>{" "}
            </section>
            {/* <section>testimonials</section> */}
            <Footer />
        </main>
    );
};

// <button
//     onClick={onButtonClick}
//     className="bg-third-bg text-text-1 px-4 py-2 rounded-md hover:bg-third-bg transition duration-200"
// >

// </button>
