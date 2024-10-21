import  { useState } from 'react'
import { FaHeart } from "react-icons/fa";



function bookCard({  booksData, likedHandler}) {
    const  { title, image, author, language, country, link, year } = booksData
    const [like, setLike] = useState(false)

    const likeHandler = () => {
        likedHandler(booksData, like)
        setLike((like) => !like)
    }
    return (
        <div className='flex flex-col w-80   p-3 bg-white  rounded-md  shadow-lg m-3'>
            <img src={image} className='w-full h-72 mx-auto  rounded-md' />
            <div className='my-2'>
                <p className='text-lg text-balance text-slate-800 font-semibold text-center'>{title}</p>
                <p className='text-center text-gray-600'>{author}</p>
            </div>
            <div className=''>
                <p className='p-1 text-sm' >language: {language}</p>
                <p className='p-1 text-sm'>Year: {year}</p>
                <p className='p-1 text-sm'>Country: {country}</p>
            </div>

            <div className='flex justify-between items-center p-1'>
                <button onClick={ likeHandler}>
                 <FaHeart className={`${like ? 'text-red-600' : 'text-red-200'} text-4xl`} />
                 </button>
                 
                <a href={link} className='p-2 bg-indigo-600 hover:bg-indigo-700 transition-all ease-in-out text-white text-center inline-block  rounded-md'>Read More</a>
            </div>

        </div>
    )
}

export default bookCard