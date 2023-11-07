import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'


const AlbumModal = ({ album, onClose }) => {
    return (
        <div className='items-center justify-center right-0 fixed bg-black bg-opacity-60 top-0 left-0 bottom-0 z-50 flex'
            onClick={onClose}
        >
            <div
            onClick={(event) => event.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-2 bg-red-300 rounded-lg'>
                {album.releaseYear}
            </h2>
            <h4 className='my-2 text-gray-500'>
                {album._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{album.title}</h2>
            </div>

            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{album.artist}</h2>
            </div>
            <p className='mt-4'>Optional</p>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                 tempore exercitationem. Accusantium, eligendi praesentium deserunt
                  eaque omnis dolore minus. Ea sint maxime saepe officia cupiditate,
                   atque molestiae aperiam error vero!
            </p>
            
            </div>
        </div>
    )
}

export default AlbumModal