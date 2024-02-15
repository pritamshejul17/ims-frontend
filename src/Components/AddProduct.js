import React, { useState } from 'react';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';
import background from "../Assets/ims2-modified.jpg";

const AddProduct = () => {
    const [folderData, setFolderData] = useState({
        name: '',
        image: null,
        quantity: '',
        price: '',
        categoryId: '',
    });

    const handleChange = (e) => {
        setFolderData({ ...folderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', folderData.image);
        formData.append('quantity', folderData.quantity);
        formData.append('price', folderData.price);

        const queryParams = new URLSearchParams();
        queryParams.append('name', folderData.name);
        queryParams.append('price', folderData.price);
        queryParams.append('quantity', folderData.quantity);
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`http://localhost:7070/api/products/upload/${folderData.categoryId}?${queryParams.toString()}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            body: formData,
        });

        if (response.ok) {
          alert('Product added successfully');
          setFolderData({
              name: '',
              image: null,
              quantity: '',
              price: '',
              categoryId: '',
          });
      } else {
          alert('Failed to add Product');
      }
    };

    return (
        <>
            <div className='' style={{ backgroundImage: `url(${background})` }}>
              <div>
                <SideMenu />
              </div>
            <div className="w-2/3 ml-10 h-screen flex justify-end items-center">
                <form
                    onSubmit={handleSubmit}
                    className="mb-14 mt-7 bg-zinc-900 opacity-90 shadow-lg flex rounded-md flex-col justify-between h-5/6 w-1/2"
                >
                    <h1 className="w-full h-20 font-medium text-lg text-center bg-zinc-800 text-white flex justify-center items-center">
                        Add Product
                    </h1>
                    <input
                        type="text"
                        name="name"
                        value={folderData.name}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-20 py-2 pl-9 pr-3 my-2 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Name"
                    ></input>
                    <input
                        type="text"
                        name="quantity"
                        value={folderData.quantity}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-20 py-2 pl-9 pr-3 my-2 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Quantity"
                    ></input>
                    <input
                        type="text"
                        name="price"
                        value={folderData.price}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-20 py-2 pl-9 pr-3 my-2 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Price"
                    ></input>
                    <input
                        type="text"
                        name="categoryId"
                        value={folderData.categoryId}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-20 py-2 pl-9 pr-3 my-2 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Category ID"
                    ></input>
                    <div className="flex justify-center items-center my-4">
                        <input
                            required
                            type="file"
                            className=""
                            onChange={(e) => setFolderData({ ...folderData, image: e.target.files[0] })}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="mb-4 font-semibold text-white rounded-md text-sm bg-red-500 w-1/3 h-12"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
};

export default AddProduct;
