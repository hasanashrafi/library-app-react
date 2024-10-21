import React from 'react'
import { CiShare1 } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";


function Layout({ children }) {
    return (
        <div className=''>
            <header className='flex justify-between bg-white max-w-7xl mx-auto rounded-b-2xl p-4'>
                <p className=" flex items-center gap-x-1 text-blue-700 rounded-lg text-xl font-medium">
               <VscLibrary className='text-2xl text-indigo-700'/>
                    Best Books
                </p>
                <a href='https://github.com/hasanashrafi/library-app-react'
                    className='flex items-center gap-x-1 bg-indigo-600 rounded-md px-2 py-1 text-white hover:bg-indigo-800 transition-all ease-in-out'
                >
                    Library-App | <CiShare1 className='text-lg' />
                </a>
            </header>

            {children}

            <footer className='mx-auto max-w-7xl bg-white text-indigo-700 text-center p-4 rounded-t-2xl'>
            <p>Developed By HsN</p>
            </footer>
        </div>
    )
}

export default Layout