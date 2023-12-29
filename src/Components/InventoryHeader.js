function InventoryHeader() {
    return ( 
        <>
            <div className=" sm:flex sm:justify-around flex justify-center w-auto h-20 border-b-2 border-zinc-300 shadow-md">
                <div className="h-full flex justify-center items-center text-3xl text-slate-800 font-semibold">
                    Inventory Items
                </div>
                <div className="h-full w-1/2 text-white font-semibold  flex justify-end items-center">
                    <button className="rounded-md text-sm bg-red-500 w-1/4 h-2/3">
                        ADD NEW
                    </button>
                </div>
            </div>
        </>
     );
}

export default InventoryHeader;