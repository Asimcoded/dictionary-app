import React from 'react'
import SearchBar from './SearchBar'
import GenerateBtn from './GenerateBtn'

function Home() {
  return (
    <div className='mx-5 mt-20'>
        <h1 className='font-bold text-textDark text-[35px] italic text-center'>Word Dictionary</h1>
        <SearchBar />
        <div className='flex justify-center items-center text-textDark gap-5'>
            <div className='w-48 h-[1px] bg-textDark'></div>
            OR
            <div className='w-48 h-[1px] bg-textDark'></div>
        </div>
        <GenerateBtn />
    </div>
  )
}

export default Home