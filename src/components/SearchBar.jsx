import React from 'react'
import { IoSearch } from "react-icons/io5";
function SearchBar({ search, setSearch, searchHandler }) {
    return (
        <div className='flex items-center gap-x-2'>
            <input
                className='p-1 outline-none rounded'
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
            />
            <button onClick={searchHandler}
            
            >
                <IoSearch className='text-3xl text-white'/>
            </button>
        </div>
    )
}

export default SearchBar