import { useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#">HOME</a>
        </li>

        <li className="p-4">
          <a href="#">COMPANY</a>
        </li>

        <li className="p-4">
          <a href="#">RESOURCES</a>
        </li>

        <li className="p-4">
          <a href="#">ABOUT</a>
        </li>

        <li className="p-4">
          <a href="#">CONTACT</a>
        </li>

        <li className="p-3">
          <button className="bg-white w-[100px] rounded-md font-medium py-1 text-black">
            Get Started
          </button>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        <ul className="p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="#">HOME</a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a href="#">COMPANY</a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a href="#">RESOURCES</a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a href="#">ABOUT</a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
