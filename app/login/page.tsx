import LoginPage from '@/components/templates/Login/LoginPage'
import React from 'react'

const Login = () => {
  return (
    <div  className='flex justify-center items-center bg-gradient-to-br from-[#8CC0DE] to-[#9BE8D8] w-[100vw] min-h-[100vh]'>
      <div className='bg-white px-[4vw] py-[1.5vw] rounded-[5vw] w-[35vw]'>
        <LoginPage/>
      </div>
    </div>
  )
}

export default Login