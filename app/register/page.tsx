import React from 'react'
import RegisterPage from '@/components/templates/Register/RegisterPage'

const Register = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-[#8CC0DE] to-[#9BE8D8] w-[100vw] min-h-[100vh]'>
      <div className='bg-white px-[4vw] py-[1.5vw] rounded-[5vw] w-[40vw]'>
        <RegisterPage />
      </div>
    </div>
  )
}

export default Register