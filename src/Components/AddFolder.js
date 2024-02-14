import React, { useState } from 'react';
import SideMenu from './SideMenu';
import logo from '../Assets/logo.jpg';
import { Link } from 'react-router-dom';
import background from "../Assets/ims2-modified.jpg"



const AddFolder = () => {
    const [folderData, setFolderData] = useState({
        name: '',
        notes: '',
        image: null,
    });

    const handleChange = (e) => {
        setFolderData({ ...folderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', folderData.image);
        const queryParams = new URLSearchParams();
        queryParams.append('name', folderData.name);

        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`http://localhost:7070/api/category/upload?${queryParams.toString()}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            body: formData,
        });

        if (response.ok) {
          alert('Folder added successfully');
          setFolderData({
              name: '',
              notes: '',
              image: null,
          });
      } else {
          alert('Failed to add folder');
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
                    className="mb-14 bg-zinc-900 opacity-90 shadow-lg flex rounded-md flex-col justify-between h-3/4 w-1/2"
                >
                    <h1 className="w-full h-20 font-medium text-lg text-center bg-zinc-800 text-white flex justify-center items-center">
                        Add Section
                    </h1>
                    <input
                        type="text"
                        name="name"
                        value={folderData.name}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-1/6 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Name"
                    ></input>
                    <input
                        type="text"
                        name="notes"
                        value={folderData.notes}
                        onChange={handleChange}
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-1/6 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Notes"
                    ></input>
                    <div className="flex justify-center items-center">
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

export default AddFolder;
