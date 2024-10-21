import  { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";

function bookCard({  booksData, likedHandler}) {
    const  { title, image, author, language, country, link, year } = booksData
    const [like, setLike] = useState(false)

    const likeHandler = () => {
        likedHandler(booksData, like)
        setLike((like) => !like)
    }
    return (
        <div className='flex flex-col w-80   p-3 bg-white  rounded-md  shadow-xl m-3'>
            <img src={image} className='w-full h-72 mx-auto  rounded-md' />
            <div className='my-2'>
                <p className='text-lg text-balance text-text font-semibold text-center'>{title}</p>
            </div>
            <div className=''>
                <p className=' text-text font-semibold p-1 flex items-center  gap-x-2'><LuPencilLine className='text-xl' /> {author}</p>
                <p className='p-1 text-sm flex items-center gap-x-2' ><IoLanguage className='text-xl'/> {language}</p>
                <p className='p-1 text-sm flex items-center gap-x-2'><MdOutlineDateRange className='text-xl' /> {year}</p>
                <p className='p-1 text-sm flex items-center gap-x-2'><MdPlace className='text-xl' /> {country}</p>
            </div>

            <div className='flex justify-between items-center p-1'>
                <button onClick={ likeHandler}>
                 <FaHeart className={`${like ? 'text-secondary' : 'text-muted'} text-3xl`} />
                 </button>

                <a href={link} className='text-sm p-2 bg-accent hover:bg-warning transition-all ease-in-out text-text text-center inline-block  rounded-md'>Read More</a>
            </div>

        </div>
    )
}

export default bookCard