import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded flex flex-col justify-between">
        <div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
              <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
            </div>
          </div>

          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">It's easy we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
          </div>

          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light">We will keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse podcasts
            </button>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="mt-6 mb-4 flex justify-around items-center text-white px-4">
          <a
            href="https://github.com/yatish2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yatish-gottapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Yatish_geek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="LeetCode"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/yatishgot6d1f/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="GeeksforGeeks"
          >
            <SiGeeksforgeeks size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
