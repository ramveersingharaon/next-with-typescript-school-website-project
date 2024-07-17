import React from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
  return (
    <button type='submit' className='bg-[#d2691e] py-2 px-5 text-white text-xl rounded border-2 hover: border-[#d2691e] hover:text-[#d2691e] hover:bg-transparent duration-200'>{children}</button>
    
  )
}

export default Button