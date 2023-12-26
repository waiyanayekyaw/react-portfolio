import React from "react";
import { Progress } from "@material-tailwind/react";

export default function EducationSkill() {
    return (
        <div className="md:flex justify-center items-center mx-auto my-5 gap-5 mt-10">
            <div className="sm:w-[100%] md:w-[40%] text-white px-10">
                <div>
                    <h2 className="text-4xl tracking-wide mb-8">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xl font-bold tracking-wide">
                                Diploma in Business & IT
                            </p>
                            <p className="font-light text-primary tracking-wide">
                                Myanmar Management Institude
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold tracking-wide">
                                Final Year majoring in English Specialization
                            </p>
                            <p className="font-light text-primary tracking-wide">
                                East Yangon University
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold tracking-wide">
                                BTEC Level 3 90-Credit Diploma in IT and Web Development
                            </p>
                            <p className="font-light text-primary tracking-wide">
                                Lithan Myanmar College
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold tracking-wide">
                                Programming Fundamental and Software Solution with Java
                            </p>
                            <p className="font-light text-primary tracking-wide">Gusto College</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:w-[100%] md:w-[40%] text-white px-10 mt-5">
                <div>
                    <h2 className="text-4xl tracking-wide mb-5">Skill</h2>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between">
                                <span>HTML</span>
                                <span>80%</span>
                            </div>
                            <Progress value={80} size="sm" color="orange" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <Progress value={80} size="sm" color="indigo" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>Javascript</span>
                                <span>70%</span>
                            </div>
                            <Progress value={70} size="sm" color="yellow" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>Bootstrap</span>
                                <span>70%</span>
                            </div>
                            <Progress value={70} size="sm" color="purple" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>Tailwind</span>
                                <span>50%</span>
                            </div>
                            <Progress value={50} size="sm" color="blue" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>React</span>
                                <span>50%</span>
                            </div>
                            <Progress value={50} size="sm" color="teal" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>React Native</span>
                                <span>50%</span>
                            </div>
                            <Progress value={50} size="sm" color="teal" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span>Firebase</span>
                                <span>30%</span>
                            </div>
                            <Progress value={30} size="sm" color="amber" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
