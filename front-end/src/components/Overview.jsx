import React from "react";

const Overview = () => {
    const testSeries = [
        {
            testSeriesname: "Physics",
            maxgrade: "100",
            completed: "24",
        },
        {
            testSeriesname: "Maths Olympiad",
            maxgrade: "100",
            completed: "24",
        },
        {
            testSeriesname: "Physics -1",
            maxgrade: "100",
            completed: "24",
        },
    ];
    const upcomingexams = [
        {
            examName: "Physics",
            maxgrade: "10",
            time: "12-12-2024",
        },
        {
            examName: "Biology",
            maxgrade: "10",
            time: "12-12-2024",
        },
        {
            examName: "Maths",
            maxgrade: "10",
            time: "12-12-2024",
        },
    ];
    const completedExams = [
        {
            examName: "SAT Mock 1",
            marks: "23",
            max: "30",
            time: "11-10-24",
        },
        {
            examName: "SAT Mock 1",
            marks: "23",
            max: "30",
            time: "11-10-24",
        },
        {
            examName: "SAT Mock 1",
            marks: "23",
            max: "30",
            time: "11-10-24",
        },
        {
            examName: "SAT Mock 2",
            marks: "23",
            max: "30",
            time: "14-10-24",
        },
    ];
    return (
        <div className="flex-1 p-8">
            <section>
                <h2 className="text-xl font-semibold mb-4">
                    Test Series Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testSeries.length > 0 &&
                        testSeries.map((test, i) => {
                            console.log(test);
                            return (
                                <div
                                    key={i}
                                    className="p-4 bg-fourth-bg shadow rounded-lg"
                                >
                                    <h3 className="text-lg font-bold">
                                        {test.testSeriesname}
                                    </h3>
                                    <p className="text-3xl font-semibold">
                                        {test.completed}%
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Completed Status</h2>
                <div className="flex flex-wrap sm:justify-evenly  gap-4">
                    {completedExams.length > 0 &&
                        completedExams.map((exam, i) => {
                            console.log(exam);
                            return (
                                <div
                                    key={i}
                                    className="p-4 w-80 bg-fourth-bg shadow rounded-lg"
                                >
                                    <h3 className="text-lg font-bold">
                                        {exam.examName}
                                    </h3>
                                    <h2>
                                        {exam.marks}/{exam.max}
                                    </h2>
                                    <p className="text-green-600">
                                        {exam.time}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    Upcoming Exams Countdown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingexams.length > 0 &&
                        upcomingexams.map((exam, i) => {
                            return (
                                <div
                                    key={i}
                                    className="p-4 bg-fourth-bg shadow rounded-lg"
                                >
                                    <h3 className="text-lg font-bold">
                                        {exam.examName}
                                    </h3>
                                    <p className="text-gray-600">{exam.time}</p>
                                </div>
                            );
                        })}
                </div>
            </section>
        </div>
    );
};

export default Overview;

// <section className="mt-8">
//     <h2 className="text-xl font-semibold mb-4">
//         Attendance Status Analytics
//     </h2>
//     <div className="p-4 bg-second-bg shadow rounded-lg">
//         <div className="h-48 flex justify-center items-center">
//             <span className="text-gray-500">
//                 [Chart Placeholder]
//             </span>
//         </div>
//     </div>
// </section>
