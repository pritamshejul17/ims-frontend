function Signin() {
    return (  
        <>
            <div className="h-screen w-full  bg-slate-200 flex justify-center items-center">
                <form className="flex bg-slate-800 rounded-md flex-col justify-around items-center shadow-md h-3/4 py-6  px-5 w-1/3">
                    <div className=" text-xl text-slate-300 font-medium">
                            SIGN IN
                    </div>
                    <input type="text" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/6  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Username"></input>
                    <input type="password" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/6  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Password"></input>  
                    <button className=" text-slate-900 text-md bg-slate-200 w-1/3 rounded-md h-12 ">SIGN IN</button>
                </form>
            </div>
        </>
    );
}

export default Signin;