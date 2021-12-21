import React from 'react'

const Maincontent = () => {
    return (
        <div className='flex flex-row flex-auto bg-white rounded-tl-xl shadow-xl border-l-0 '>
            <div className='w-1/5 flex flex-col'>
                <div className='h-24 bg-red-200 flex-none'>top</div>
                <div className='flex-auto overflow-y-auto'>
                    <a href="" className='block border-b'>
                        <div className='border-l-2 border-blue-500 p-2'>
                            <div className='bg-red-200'>

                            </div>
                            <div className='bg-red-200'>

                            </div>
                            conservation card
                        </div>
                    </a>
                </div>
            </div>



            <div className='w-3/5 border-r border-l border-gray-400'>center</div>
            <div className='w-1/5 bg-gray-200'>right</div>
        </div>
    )
}

export default Maincontent
