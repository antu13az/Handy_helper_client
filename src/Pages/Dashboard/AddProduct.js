import React from 'react';
import { toast } from 'react-toastify';
import { BASE_API } from '../../Config';

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const img = e.target.img.value
        const dis = e.target.dis.value
        const price = e.target.price.value
        const minOrder = e.target.minOrder.value
        const available = e.target.available.value

        const addProduct = {

            name: name,
            img: img,
            dis: dis,
            price: price,
            minOrder: minOrder,
            available: available
        }

        fetch(`${BASE_API}/addProduct`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addProduct),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    toast.success("Add Successfully")
                }
            });
    }
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-8">Add Products</h1>
            <form className='add-product' onSubmit={handleAddProduct}>
                <label>Product Img</label>
                <input name="img" className="profile-input" type="text" placeholder="Product Img" />

                <label>Product Name</label>
                <input name="name" className="profile-input" type="text" placeholder="Your Facebook Link" />

                <label>Product Description</label>
                <textarea className="text-area" name="dis" type="text" placeholder="Product Description" />
                <label>Price</label>
                <input name="price" className="profile-input" type="number" placeholder="Product Price" />
                <label>Min Quantity</label>
                <input name="minOrder" className="profile-input" type="number" placeholder="Minimum Quantity" />
                <label>Available</label>
                <input name="available" className="profile-input" type="number" placeholder="Available Quantity" />
                <input
                    className="care-btn care-2  feedback mt-3 cursor-pointer"
                    type="submit"
                    value="ADD"
                />
            </form>
        </div>
    );
};

export default AddProduct;