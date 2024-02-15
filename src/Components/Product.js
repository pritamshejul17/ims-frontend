import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Picture from '../Assets/logo.jpg';
import background from "../Assets/ims2-modified.jpg";
import { useParams } from 'react-router-dom';

function Product() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { categoryId, productId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    fetch(`http://localhost:7070/api/products/${productId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
        setImageUrl(data.imageUrl);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleUpdate = () => {
    const token = localStorage.getItem('authToken');

    fetch(`http://localhost:7070/api/products/update/${categoryId}/${productId}?name=${name}&price=${price}&quantity=${quantity}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Handle successful update
        alert("Update successful");
        console.log('Update successful');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <div>
        <SideMenu />
      </div>
      <div className='flex justify-center items-center mr-6 h-screen border-2 border-black' style={{ backgroundImage: `url(${background})` }}>
        <img className='h-1/2' src={imageUrl} alt='Product' />
        <div className='ml-10'>
          <form className='mt-4 bg-zinc-800 p-10'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-md font-medium text-white'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 '
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='price' className='block text-md font-medium text-white'>
                Price
              </label>
              <input
                type='text'
                id='price'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='quantity' className='block text-md font-medium text-white'>
                Quantity
              </label>
              <input
                type='text'
                id='quantity'
                name='quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <button
              type='button'
              onClick={handleUpdate}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Product;
