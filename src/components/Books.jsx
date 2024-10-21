import React, { useEffect, useState } from 'react'
import BookCard from './bookCard'
import { booksList } from '../constants/booksData'
import SideBar from './SideBar'
import { FaHeart } from "react-icons/fa";
import SearchBar from './SearchBar';

function BooksPage() {
    const [books,setBooks] = useState(booksList)
    const [isOpen, setIsOpen] = useState(false)
    const [liked, setLiked] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState([])
   
   
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

    const searchHandler = () => {
        if (search) {
            const newBooks = booksList.filter((book) =>
                book.title.toLowerCase().includes(search))
            setBooks(newBooks)
        } else {
            setBooks(booksList)
        }
    }
    return (
        <>
          <div className='  mt-4'>
              <div className='flex justify-between items-center'>
                <button
                    onClick={openHandler}
                    className='flex items-center gap-x-2 text-white text-lg '>
                    <FaHeart className={`${isOpen ? "text-red-600" : "text-white"} text-3xl `} />
                    Favorites
                </button>
                <SearchBar 
                searchHandler={searchHandler}
                 search={search} setSearch={setSearch} />
            </div>
            {
                isOpen &&
                <div className='my-5'>
                    {
                        !!favorites.length &&
                        <div className="flex flex-wrap justify-start bg-indigo-200/10 rounded-md shadow-xl w-full  ">
                            {favorites.map((book) =>
                                <SideBar key={book.id} data={book} onRemove={removeBook} />)
                            }
                        </div>
                    }
                </div>
            }
          </div>
            <div className='w-full mt-5  mx-auto grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-5 p-3 justify-center '>
                {books.map((book) => (
                    <BookCard key={book.id}
                        booksData={book}
                        likedHandler={likedHandler} />
                ))}
            </div>
        </>
    )
}

export default BooksPage