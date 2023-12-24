import background from "../Assets/backgroundi.png"

function Signup () {
    const myStyle = {
        backgroundImage: `url(${background})`
    };
    return ( 
        <>
            <div className="flex justify-around flex-col sm:flex sm:flex-row">
                <div className=" p-2 ">
                    <img className="h-full " src={background} alt="Inventory Logo"></img>
                </div>
                <div className="w-3/4 h-screen flex flex-col  items-center justify-center">
                    <div className="p-2 text-xl text-slate-800 font-medium">
                        SIGN UP, It's Free!
                    </div>
                    <form className="flex flex-col w-3/4 h-3/4 items-center justify-around">
                        <input type="text" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="First Name"></input>
                        <input type="text" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Last Name"></input>
                        <input type="text" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Username"></input>
                        <input type="email" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Email"></input>
                        <input type="password" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Password"></input>
                        <input type="password" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/7  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Confirm Password"></input>
                        <button className=" text-slate-200 text-md bg-slate-800 w-1/3 rounded-md h-12 ">SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default Signup;