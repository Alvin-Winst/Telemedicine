'use client';
import React, { useState } from 'react'
import bcrypt from 'bcryptjs-react'
import { useRouter } from 'next/navigation';

const encrypt = (pass: string) => {
    const hash = bcrypt.hash('QWERTY12345mnbvc', 3)
    let hashString = ''
    hash.then((hash) => {hashString = hash})
    return hashString
}

const users = [
    {
        username: 'Bret',
        password: encrypt('QWERTY12345mnbvc')
    },
    {
        username: 'PW',
        password: encrypt('ASDFghjkl')
    }
]

const className =' bg-[#DBD7D7] placeholder:text-black font-[600] placeholder:font-[600] rounded-[4vw] px-[1.75vw] py-[0.75vw] w-[100%] border-[#808080] border-[0.05vw] mb-[1.5vw]'


const LoginPage = () => {
    const router = useRouter()

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const validateUser = () => {
        const password = encrypt(loginData.password)
        const user = users.find(user => user.username === loginData.username) || '-1'
        if (user === '-1') {
            alert('User not found')
        } else if (user.password !== password) {
            alert('Incorrect password')
        } else {
            alert('Login success!')
            router.push('/dashboard')
        }
    }

  return (
    <div className=''>
        <p className='text-center mb-[1.5vw] text-[2vw] font-[700]'>Log In</p>
        <input type="text" id='username' placeholder='Username' className={`${className}`} onChange={(e) => {
            setLoginData({
                password: loginData.password,
                username: e.target.value,
            })
        }}/>
        <input type="password" id='password' placeholder='Kunci Sandi' className={`${className}`} onChange={(e) => {
            setLoginData({
                username: loginData.username,
                password: e.target.value,
            })
        }}/>
        <button className='w-full  bg-[#A1EEBD] px-[1.5vw] py-[0.5vw] my-[1vw] rounded-[1vw] font-[600]' onClick={validateUser}>Log In</button>
        <p className='text-center'>Belum memiliki akun? <span className='text-[#8CC0DE] font-[600]'><a href="/register">Daftar</a></span></p>
    </div>
  )
}

export default LoginPage