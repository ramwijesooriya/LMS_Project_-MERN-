import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

const isCourseListPage = location.pathname.includes('/course-list') 




  return (
    <div className={`flex justify-between items-center px-4 sm:px-10 md:px-4 lg:px-36 border-b border-gray-500  py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'} `}>
      <img src={assets.logo} alt="LOGO" className='w-28 lg:w-32 cursor-pointer ' />
      <div className='hidden md:flex items-center gap-5 text-gray-500 '>

        <div>
          <button>Become educator</button>
          <Link to='/my-enrollments'>MY enrollments</Link>
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar