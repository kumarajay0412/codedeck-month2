import React from 'react'
import LeftPaneHomeScreen from '../Component/Home/LeftPaneHomeScreen'
import RightPaneHomeScreen from '../Component/Home/RightPaneHomeScreen'
import Modal from '../Component/Modal'
import { ModalContext } from '../Context/ModalContext'
function Home() {
    const {isOpenModal} = React.useContext(ModalContext)
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className='md:w-full sm:w-full w-5/12'>
                <LeftPaneHomeScreen />
            </div>
            <div className='md:w-full sm:w-full w-7/12 border-2 border-black'>
                <RightPaneHomeScreen />
            </div>
            {isOpenModal.show && <Modal />}
        </div>
    )
}

export default Home