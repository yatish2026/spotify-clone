import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
  const { id } = useParams()
  const albumData = albumsData[id]

  return (
    <>
      <Navbar />

      {/* Album Info Section */}
      <div className="container mx-auto p-4 my-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col text-white">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>

          {/* Bullet-point style info line */}
          <p className="mt-1 text-sm text-gray-400 flex items-center gap-1">
            <img className="inline-block w-5 h-5 mr-1" src={assets.spotify_logo} alt="Spotify" />
            <b>Spotify</b>
            <span className="mx-1">•</span>
            1,452,234 likes
            <span className="mx-1">•</span>
            <b>50 songs</b>
            <span className="mx-1">•</span>
            about 3 hr 45 min
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />
      </div>
      <hr />

      {/* Songs List */}
      {
        songsData.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff11] cursor-pointer rounded'
          >
            <p className='text-white flex items-center'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img className='w-8 h-8 mr-4 rounded-sm' src={item.image} alt={item.name} />
              {item.name}
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='hidden sm:block text-[15px]'>5 days ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
