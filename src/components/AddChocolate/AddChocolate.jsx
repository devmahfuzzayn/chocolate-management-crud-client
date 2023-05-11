import React from "react";
import "./AddChocolate.css";
import arrowLeftLogo from "../../assets/logos/arrow-left.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {
    const handleAddChocolate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;

        const chocolate = { name, country, category };
        console.log(chocolate);

        fetch("http://localhost:5000/addChocolate", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(chocolate),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        text: "Data Inserted Successfully!",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="home">
            <div className="container max-w-[1920px] mx-auto mt-[130px]">
                <div className="content bg-gray-100 flex flex-col justify-center items-center p-12 mx-5 rounded-[16px]">
                    <div className="page-title rounded-lg px-[65px] py-4">
                        <h1 className="text-[32px] text-white font-semibold">
                            Chocolate Management System
                        </h1>
                    </div>
                    <div className="chocolate mt-[72px] w-full">
                        <div className="all-chocolates-section w-[216px] mb-8">
                            <Link to="/">
                                <button className="flex items-center gap-x-2  p-[16px]">
                                    <img src={arrowLeftLogo} /> All Chocolates
                                </button>
                            </Link>
                        </div>
                        <hr />
                        <div className="add-chocolate-form bg-white mt-8 rounded-lg px-5 pb-12">
                            <div className="header text-center pt-12">
                                <h2 className="text-[#141414] text-[24px] font-semibold">
                                    New Chocolates
                                </h2>
                                <p className="text-[16px] text-[rgba(20, 20, 20, 0.6)] mt-2">
                                    Use the below form to create a new product
                                </p>
                            </div>
                            <form
                                onSubmit={handleAddChocolate}
                                className="max-w-[885px] flex flex-col mx-auto"
                            >
                                <div className="form-control w-full mt-12">
                                    <label className="label" htmlFor="name">
                                        <span className="label-text font-semibold">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Hot Pink Chocolate"
                                        className="bg-white input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control w-full mt-8">
                                    <label className="label" htmlFor="country">
                                        <span className="label-text font-semibold">
                                            Country
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="Enter Country Name"
                                        className="bg-white input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control w-full mt-6">
                                    <label className="label" htmlFor="category">
                                        <span className="label-text font-semibold">
                                            Category
                                        </span>
                                    </label>
                                    <select
                                        className="select 
                                        select-bordered"
                                        name="category"
                                        id="category"
                                        defaultValue="Premium"
                                    >
                                        <option>Premium</option>
                                        <option>Standard</option>
                                        <option>Mixed</option>
                                        <option>Soothed</option>
                                        <option>Polished</option>
                                        <option>Light</option>
                                    </select>
                                </div>
                                <button className="save-btn text-white p-[17px] font-semibold rounded-lg mt-8">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddChocolate;
