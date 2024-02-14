import Inventory from "../Components/Inventory";
import SideMenu from "../Components/SideMenu";
import AddFolder from "../Components/AddFolder";
import Folder from "../Components/Folder";
import React, { useState } from 'react';

function Dashboard() {

    const [folders, setFolders] = useState([]);
    const [showComponent, setShowComponent] = useState(false);
  
    const handleMouseEnter = () => {
        // console.log();
        setShowComponent(true);
        // console.log(showComponent);

    };
  
    const handleMouseLeave = () => {
        setShowComponent(false);
    };

    
    const handleAddFolder = (folderData) => {
        setFolders((prevFolders) => [...prevFolders, folderData]);
    };
    return ( 
        <>
            <div className="flex h-full w-full">
                <div className="w-full basis-1/4 ">
                    <SideMenu />
                </div>
                <div className=" w-full basis-100">
                    <Inventory onHover = {handleMouseEnter} offHover = {handleMouseLeave}/>
                    <Folder folders={folders} />
                </div>
            </div>
        </>
     );
}

export default Dashboard;