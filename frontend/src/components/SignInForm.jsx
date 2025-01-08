﻿import React from 'react'

const SignInForm = ({setShowingSignUpForm}) => {

  const handleClickInsideFOrm = (e) => {
    e.stopPropagation();
  }

  const handleClick = () => {
    setShowingSignUpForm(true);
  }
  
  return (
    <div onClick={handleClickInsideFOrm} className='h-[50vh] w-[30%] bg-[rgba(10,10,10)] rounded-xl px-6 py-4 border-2 border-gray-400'>
      <h1 className='text-3xl text-center mb-2'>Login From Here</h1>
      <form className='h-[90%] flex items-center flex-col gap-4 pt-8' >
          <div className='h-auto w-[90%] flex justify-center items-center'>
              <input type="text" placeholder='Type a username' className='bg-theme-primary placeholder:text-gray-700 px-4 py-2 rounded' />
          </div>
          <div className='h-auto w-[90%] flex justify-center items-center'>
              <input type="text" placeholder='Type a password' className='bg-theme-primary placeholder:text-gray-700 px-4 py-2 rounded' />
          </div>
          <button className='bg-orange-700 h-[15%] w-[80%] rounded-xl'>Log In</button>
          <div>
              <h3 className='text-lg'>Already have an account? <span onClick={handleClick} className='text-blue-500 hover:cursor-pointer'>Sign Up Instead.</span></h3>
          </div>
      </form>
    </div>
  )
}

export default SignInForm;
