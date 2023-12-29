import Inventory from "../Components/Inventory";
import SideMenu from "../Components/SideMenu";

function Dashboard() {
    return ( 
        <>
            <div className="flex h-screen w-full">
                <div className="w-full basis-1/4">
                    <SideMenu />
                </div>
                <div className="w-full basis-100">
                    <Inventory />
                </div>
            </div>
        </>
     );
}

export default Dashboard;