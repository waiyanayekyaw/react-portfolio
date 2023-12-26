import React from "react";
import profile from "../assets/profile1.png";
import arrow from "../assets/arrow.svg";

export default function About() {
    return (
        <div className="h-auto md:flex justify-center items-center mx-auto my-5">
            <div className="sm:w-[100%] md:w-[20%] flex justify-center">
                <img src={profile} alt="" className="w-[300px]" />
            </div>

            <div className="sm:w-[100%] md:w-[50%] text-white space-y-5 px-10 mt-5">
                <h2 className="text-4xl tracking-wide">About Me</h2>

                <h3 className="text-2xl font-light tracking-wide">Web & Mobile Developer</h3>
                <p className="font-light tracking-wide">
                    I’m a University student majoring in English specialization at East Yangon
                    University. I’m so interesting in programming field. Now, I’m doing some small
                    projects with my team.
                </p>

                <div className="md:flex">
                    <div className="w-[100%] md:w-[50%] text-lg space-y-2">
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                Name: <span className="font-light ms-3">Wai Yan Aye Kyaw</span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                NRC: <span className="font-light ms-3">12/SAKHANA(N)078658</span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                Nationality: <span className="font-light ms-3">Myanmar</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-[100%] md:w-[50%] text-lg space-y-2">
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                Date of Birth:{" "}
                                <span className="font-light ms-3">
                                    28<sup>th</sup> February, 2001
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                Gender: <span className="font-light ms-3">Male</span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={arrow}
                                alt=""
                                className="bg-primary w-5 h-5 rounded-full mr-2"
                            />
                            <p className="tracking-wider">
                                Address:{" "}
                                <span className="font-light ms-3">
                                    No.(46), Dammayone Street, Myaynigone, Sanchaung
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
