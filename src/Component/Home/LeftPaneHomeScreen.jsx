import React from 'react'
import Playground from '../../Pages/Playground';

function LeftPaneHomeScreen() {
  return (
    <div className='border-2 border-black h-screen bg-black flex justify-end'>
        
        <div className='mx-auto flex flex-col items-center justify-center gap-3 text-center'>
            <img src='./logo.png'/>
            <h3 className='font-semibold text-white '> Code Deck</h3>
            <h4 className='font-semibold text-white '> Code. Compile. debug</h4>
            <button className='w-full p-4 bg-white shadow-lg  rounded-full drop-shadow-2xl  '>
                + Create New Playground
            </button>
        </div>
    </div>
  )
}

export default LeftPaneHomeScreen