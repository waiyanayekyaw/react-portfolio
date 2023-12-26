import React from "react";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";

export default function Footer() {
    return (
        <div className="my-5">
            <div className="text-white md:flex justify-center items-center mx-auto space-y-3">
                <div className="md:w-[25%] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] flex flex-col justify-center items-center rounded-full shadow-sm shadow-primary space-y-4">
                        <img src={phone} alt="" />
                        <p className="tracking-wide">+959 899986936</p>
                    </div>
                </div>
                <div className="md:w-[25%] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] flex flex-col justify-center items-center rounded-full shadow-sm shadow-primary space-y-4">
                        <img src={email} alt="" />
                        <p className="tracking-wide">wy04839@gmail.com</p>
                    </div>
                </div>
                <div className="md:w-[25%] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] flex flex-col justify-center items-center rounded-full shadow-sm shadow-primary space-y-4">
                        <img src={github} alt="" />
                        <a href="https://github.com/waiyanayekyaw">
                            https://github.com/waiyanayekyaw
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-white border-t mt-5">
                <p className="pt-4">
                    Copyright &copy; All Right Reserved | made by Wai Yan Aye Kyaw
                </p>
            </div>
        </div>
    );
}
