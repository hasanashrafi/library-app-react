import React, { useEffect, useState } from 'react'
import BookCard from './bookCard'
import { booksList } from '../constants/booksData'
import SideBar from './SideBar'
import { FaHeart } from "react-icons/fa";

function BooksPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [liked, setLiked] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const favoritesBooks = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favoritesBooks)
    }, [])

    const likedHandler = (booksData, status) => {
        if (status) {
            const newLiked = liked.filter((i) => i.id !== booksData.id)
            setLiked(newLiked)
            const updatedFavorites = favorites.filter((i) => i.id !== booksData.id);
            setFavorites(updatedFavorites);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
            if (!favorites.some(book => book.id === booksData.id)) {
                const updatedFavorites = [...favorites, booksData];
                setFavorites(updatedFavorites);
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
                setLiked(liked => [...liked, booksData])
            }
        }
    }

    const openHandler = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const removeBook = (id) => {
        const updatedFavorites = favorites.filter(book => book.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    return (
        <>
            <button
                onClick={openHandler}
                className='flex items-center gap-x-2 text-white text-lg '>
                <FaHeart className={`${isOpen ? "text-red-600" : "text-white"} text-3xl `} />
                Favorites
            </button>
            {
                isOpen && <div className='my-5'>
                    {
                        !!favorites.length &&
                        <div className="flex flex-wrap justify-between  w-full border-b-2 ">
                            {favorites.map((book) =>
                                <SideBar key={book.id} data={book} onRemove={removeBook} />)
                            }
                        </div>
                    }
                </div>
            }
            <div className='w-full  mx-auto grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-5 p-3 justify-center '>
                {booksList.map((book) => (
                    <BookCard key={book.id}
                        booksData={book}
                        likedHandler={likedHandler} />
                ))}
            </div>
        </>
    )
}

export default BooksPage