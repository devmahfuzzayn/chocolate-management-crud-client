import React from "react";
import "./Chocolate.css";
import EditIcon from "../../assets/logos/edit-2 1.svg";
import DeleteIcon from "../../assets/logos/delete-2 1.svg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Chocolate = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, category } = chocolate;
    const chocolateImages = [
        "https://i.ibb.co/s6wVNW5/chocolate-1.png",
        "https://i.ibb.co/b669h28/chocolate-2.png",
        "https://i.ibb.co/YfKWHp7/chocolate-3.png",
        "https://i.ibb.co/QJxXPsM/chocolate-4.png",
        "https://i.ibb.co/x1XHgdr/chocolate-5.png]",
    ];

    const handleChocolateDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this ${name} chocolate!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolates/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = chocolates.filter(
                                (chocolate) => chocolate._id !== _id
                            );
                            Swal.fire(
                                "Deleted!",
                                "Your chocolate has been deleted.",
                                "success"
                            );
                            setChocolates(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="chocolate">
            <div className="content flex justify-between items-center p-8">
                <img src={chocolateImages[Math.floor(Math.random() * 5)]} />
                <h2>{name}</h2>
                <p>{country}</p>
                <p>{category}</p>
                <div className="action-section flex items-center gap-x-6">
                    <Link to={`/chocolates/update/${_id}`}>
                        <button className="action-btn p-[12px] rounded-lg">
                            <img src={EditIcon} className="w-[24px]" />
                        </button>
                    </Link>
                    <button
                        onClick={() => handleChocolateDelete(_id)}
                        className="action-btn p-[12px] rounded-lg"
                    >
                        <img src={DeleteIcon} className="w-[24px]" />
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Chocolate;
