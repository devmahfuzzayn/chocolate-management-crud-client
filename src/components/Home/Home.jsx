import React, { useState } from "react";
import "./Home.css";
import plusLogo from "../../assets/logos/plus.svg";
import chocolateLogo from "../../assets/logos/chocolate-bar 1.svg";
import { Link, useLoaderData } from "react-router-dom";
import Chocolate from "../Chocolate/Chocolate";

const Home = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);

    return (
        <div className="home">
            <div className="container max-w-[1920px] mx-auto mt-[130px]">
                <div className="content bg-gray-100 flex flex-col justify-center items-center p-12 mx-5 rounded-lg">
                    <div className="page-title rounded-lg px-[65px] py-4">
                        <h1 className="text-[32px] text-white font-semibold">
                            Chocolate Management System
                        </h1>
                    </div>
                    <div className="chocolates-table mt-[72px]">
                        <div className="new-chocolate-section w-[216px] mb-8">
                            <Link to="/addChocolate">
                                <button className="flex items-center gap-x-2  p-[16px] border-2 border-[rgba(20, 20, 20, 0.15)] rounded-lg">
                                    <img src={plusLogo} /> New Chocolate{" "}
                                    <img src={chocolateLogo} />
                                </button>
                            </Link>
                        </div>
                        <div className="table-head w-[930px] flex justify-between px-[41px] py-5 rounded-lg">
                            <span className="text-[16px] text-[rgba(20, 20, 20, 0.8)] font-semibold">
                                Image
                            </span>
                            <span className="text-[16px] text-[rgba(20, 20, 20, 0.8)] font-semibold">
                                Name
                            </span>
                            <span className="text-[16px] text-[rgba(20, 20, 20, 0.8)] font-semibold">
                                Country/Factory
                            </span>
                            <span className="text-[16px] text-[rgba(20, 20, 20, 0.8)] font-semibold">
                                Category
                            </span>
                            <span className="text-[16px] text-[rgba(20, 20, 20, 0.8)] font-semibold">
                                Action
                            </span>
                        </div>
                        <div className="table-body">
                            {chocolates.map((chocolate) => (
                                <Chocolate
                                    key={chocolate._id}
                                    chocolate={chocolate}
                                    chocolates={chocolates}
                                    setChocolates={setChocolates}
                                ></Chocolate>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
