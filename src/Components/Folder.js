import React from 'react'
// import T1 from '../Assets/MEN/Shirts/T1.jpg'
// import T3 from '../Assets/MEN/Shirts/T3.jpg'
// import B3 from '../Assets/MEN/Pants/B3.jpg'
// import S3 from '../Assets/MEN/Shoes/S3.jpg'
import logo from '../Assets/cartlogo.jpg'
import { Link } from 'react-router-dom'


const Folder = ({folders}) => {
  return (
    <>
        <div className='grid grid-cols-4 gap-4 p-6'>
            
        {folders.map((folder, index) => (
            <Link to = {""} key = {""} className = 'w-60 p-3 text-stone-700 bg-stone-100 rounded-md shadow-md'>
            <div className = 'flex justify-center hover:cursor-pointer'><img className = 'h-60  w-45' src = {URL.createObjectURL(folder.image)}/></div>
            <h1 className = 'text-sm text-center font-medium p-1'>{folder.name}</h1>
            <h1 className ='text-sm font-semibold text-center'>{folder.notes}</h1>
            </Link>
      ))}
        </div>
    </>
  )
}

export default Folder