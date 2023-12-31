
import React, { useState } from 'react'
    
const AddFolder = (props) => {

    const [folderData, setFolderData] = useState({
      name: '',
      notes: '',
      image: null,
    });
  
    const handleChange = (e) => {
      if (e.target.type === 'file') {
        const imageData = e.target.files[0];
        setFolderData({ ...folderData, image: imageData });
      } else {
        const { name, value } = e.target;
        setFolderData({ ...folderData, [name]: value });
        // console.log(folderData.name);
      }
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      // Pass the folderData to the parent component or any other component.
    //   props.onAddFolder(folderData);
        if (props.onSubmitFolder) {
            props.onSubmitFolder(folderData);
        }
    };
  
    return ( 
        <>
            <div className=" absolute w-4/5 h-3/4 p-4 flex  justify-end items-center">
                    <form onSubmit={handleSubmit}  className="absolute  mr-20 mb-10 bg-gray-100 opacity-90  shadow-lg  flex rounded-md flex-col justify-between  h-full w-1/4" >
                        <h1 className="w-full h-14 font-medium text-md text-center bg-zinc-800 text-white flex justify-center items-center" >Add Section </h1>
                        <input
                        type="text"
                        name="name"
                        value={folderData.name}
                        onChange={handleChange}
                        required
                        className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-1/7 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm"
                        placeholder="Name"
                        ></input>
                        <input type="text" className="mx-4 placeholder:non-italic placeholder:text-slate-400 block bg-white w-f=1/3 border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Notes"></input>
                        {/* <h4 className="text-center">Add Image</h4> */}
                        <div className="flex justify-center items-center">
                            <input required  type="file" className = "" onChange={handleChange}/>   
                        </div>
                        <div className='mb-4 flex justify-center items-center'>
                            <button type='submit' className="mb-4 font-semibold text-white rounded-md text-sm bg-red-500 w-1/4 h-10 ">ADD </button>
                        </div>
                    </form>
            </div>
        </>
     );
}

export default AddFolder;