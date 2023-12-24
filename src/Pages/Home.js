import logo from "../Assets/ilogo.png"


function Home() {
    return ( 
        <>
            <div className="w-full p-2 bg-slate-100">
                <img className="h-12 w-12 ml-10 " src={logo} alt="Inventory Logo"></img>   
            </div>
            <div className="bg-slate-800 h-screen flex flex-col items-center mt-30 ">
                <div className="text-slate-300 flex justify-center text-center p-10 mt-20">
                    <p className="text-5xl font-medium">Inventory management software 
                     <br /> designed for Indian businesses</p>
                </div>
                <div className="text-slate-300 flex justify-center text-center p-2">
                    <p className="text-md">
                    Manage orders. Track inventory. Oversee warehouses. One inventory management <br />software to run all your inventory operations.
                    </p>
                </div>
                <div className="flex w-1/3 justify-around p-6">
                    <button className=" text-slate-900 text-md bg-slate-200 w-1/3 rounded-md h-12 ">
                    SIGN UP</button>
                    <button className=" text-slate-900 text-md bg-slate-200 w-1/3 rounded-md h-12 ">
                    LOG IN</button>

                </div>
            </div>
        </>
     );
}

export default Home;