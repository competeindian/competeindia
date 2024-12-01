import React from "react";
import { ButtonPri, ButtonSec } from "../components/Buttons";

const ExamDetailts = () => {
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
    const handleTakeTest = () => {};
    if (exams.length == 0) {
        return (
            <section
                className="text-text-1 mx-auto flex mt-30 items-center
             justify-center"
            >
                <h1 className=" text-3xl text-center font-semibold text-text-1 mb-2">
                    Currently no exams are available{" "}
                </h1>
            </section>
        );
    }
    return (
        // <section className="text-text-1 flex flex-wrap justify-center">
        <section className="text-text-1 mx-auto  grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 justify-center">
            {exams.length > 0 &&
                exams.map((exam) => {
                    return (
                        <div
                            key={exam._id}
                            className=" bg-fourth-bg rounded-lg shadow-lg overflow-hidden m-4 p-10"
                        >
                            <div className=" text-3xl font-semibold text-text-1 mb-2">
                                {exam?.examName}
                            </div>
                            <div className="text-text-3 text-xl  mb-4">
                                {exam.examdescription}
                            </div>
                            <div className="text-text-3 text-xl  mb-4">
                                {exam.maxMarks}
                            </div>

                            <ButtonPri handleClick={() => handleTakeTest()}>
                                {"Take test"}
                            </ButtonPri>
                        </div>
                    );
                })}
        </section>
    );
};

export default ExamDetailts;
