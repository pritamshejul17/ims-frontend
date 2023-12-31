import InventoryHeader from "./InventoryHeader";

function Inventory(props) {
    // console.log(props);
    return ( 
        <>
            <div className="">
                <InventoryHeader param={props}/>
            </div>
        </>
     );
}

export default Inventory;