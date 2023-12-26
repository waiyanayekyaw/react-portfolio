import React from "react";
import banner from "../assets/banner.png";

export default function Banner() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[80%] h-[60%] md:h-[80%] flex justify-around custom-box-shadow">
                <div className="text-white text-center flex flex-col justify-center space-y-3">
                    <span>Hey, I am</span>
                    <h1 className="text-4xl">Wai Yan Aye Kyaw</h1>
                    <h1 className="text-3xl text-primary">
                        Web <span className="text-lg text-white">&</span> Mobile Developer
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <img src={banner} alt="" className="w-[350px] hidden md:block" />
                </div>
            </div>
        </div>
    );
}
