import React from 'react'
import { CiCircleRemove } from 'react-icons/ci';


function SideBar({ data, onRemove }) {
    const { image, title } = data;
    const deleteHandler = () => {
        onRemove(data.id);
    }

    return (
        <div className='text-center m-3  rounded-md'>
            <button
                onClick={deleteHandler}
                className=' rounded-full  bg-red-600 text-white mb-2 hover:bg-red-500 transition-all ease-in-out'>
                <CiCircleRemove  className='text-3xl' />
                
            </button>
            <img className='mx-auto rounded-md w-full' src={image} alt={title} />
            <p className='text-wrap w-28 text-lg font-semibold text-white text-center '>{title}</p>
        </div>
    )
}

export default SideBar