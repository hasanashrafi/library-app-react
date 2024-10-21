import React from 'react'
import { IoSearch } from "react-icons/io5";
function SearchBar({ search, setSearch, searchHandler }) {
    return (
        <div className='flex items-center gap-x-2'>
            <button onClick={searchHandler}>
                <IoSearch className='text-3xl text-primary'/>
            </button>
            <input
                className='p-1 outline-none rounded'
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
            />
        </div>
    )
}

export default SearchBar