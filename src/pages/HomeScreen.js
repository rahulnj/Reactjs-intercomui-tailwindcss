import React from 'react'
import Maincontent from '../components/Maincontent'
import Primary from '../components/Primary'
import Submenu from '../components/Submenu'

const HomeScreen = () => {
    return (
        <div className='flex flex-row h-screen'>
            <Primary />
            <Submenu />
            <Maincontent />
        </div>
    )
}

export default HomeScreen
