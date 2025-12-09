import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 
                      flex flex-col items-center text-center 
                      md:grid md:grid-cols-4 md:gap-8 md:text-left md:items-start'>

        {/* info */}
        <div className='mb-8'>
          <Link to='/'>
            <h1 className='text-red-500 text-2xl font-bold'>NafiStore</h1>
          </Link>
          <p className='mt-2 text-sm'>Powering Your World with the Best E-Commerce Platfrom.</p>
          <p className='mt-2 text-sm'>City University,savar,Dhaka</p>
          <p className='text-sm'>Email: nafiul1011@gmail.com</p>
          <p className='text-sm'>Phone: +8801571117435</p>
        </div>

        {/* Customer Service */}
        <div className='mb-8'>
          <h3 className='text-xl font-semibold'>Customer Service</h3>
          <ul className='mt-2 text-sm space-y-2'>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='mb-8'>
          <h3 className='text-xl font-semibold'>Follow Us</h3>
          <div className='flex justify-center md:justify-start space-x-4 mt-2 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* Newsletter */}
        <div className='w-full max-w-sm'>
          <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
          <p className='mt-2 text-sm'>
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form className='mt-4 flex'>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full p-2 rounded-l-md text-gray-900 focus:outline-none'
            />
            <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} 
          <span className='text-red-500'> NafiStore</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
