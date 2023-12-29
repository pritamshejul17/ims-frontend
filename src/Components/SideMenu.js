import { Link } from "react-router-dom";
import logo from "../Assets/cartlogo.jpg"

function SideMenu() {
    return ( 
        <>
            <div className="bg-zinc-800 text-lg text-white w-full h-screen">
                <div className="flex justify-around items-center flex-col h-3/4 w-full">
                    <div className="p-4 flex shadow-md rounded-md w-full h-full items-center justify-center">
                        <div className="mr-2 mt-1">
                             <img className="h-7 w-8" src={logo} alt="Inventory Logo"></img>  
                        </div>
                        <Link className="font-medium">IMS system</Link>
                    </div>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Dashboard</Link>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Inventory</Link>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Sales</Link>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Notifications</Link>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Settings</Link>
                    <Link className="text-sm w-full shadow-md hover:bg-red-500 h-full flex justify-center items-center">Settings</Link>
                </div>
            </div>
        </>
     );
}

export default SideMenu;