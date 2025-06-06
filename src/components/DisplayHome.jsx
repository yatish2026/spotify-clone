import React from 'react';
import Navbar from './Navbar';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import { albumsData, songsData } from '../assets/assets';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='p-4 text-white'> {/* white text and padding */}
        <div className='mb-8'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto gap-4'>
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        </div>

        <div className='mb-8'>
          <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
          <div className='flex overflow-auto gap-4'>
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
