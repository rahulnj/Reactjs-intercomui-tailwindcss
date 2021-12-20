import React from 'react'

const Submenu = () => {
    return (
        <div className='w-64 bg-gray-100 p-4 flex-col space-y-4'>
            <div className='flex flex-row justify-between items-center mb-6'>
                <h1 className='font-semibold text-2xl'>Inbox</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-none h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='border-2 border-red-200 h-64'></div>
            <div className='border-2 border-blue-200 h-64'></div>

        </div >
    )
}

export default Submenu
