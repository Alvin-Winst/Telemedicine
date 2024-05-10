'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs-react';

const RegisterPage = () => {

  const router = useRouter()

  const className =' bg-[#DBD7D7] placeholder:text-black font-[600] placeholder:font-[600] rounded-[4vw] px-[1.75vw] py-[0.75vw] w-[100%] border-[#808080] border-[0.05vw] mb-[1.5vw]'

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confPassword: '',
  })

  const [passwordEye, setPasswordEye] = useState('/eye.svg')
  const [passwordShow, setPasswordShow] = useState('password')

  const [confPasswordEye, setConfPasswordEye] = useState('/eye.svg')
  const [confPasswordShow, setConfPasswordShow] = useState('password')

  const hideShowPassword = () => {
    if (passwordEye === '/eye.svg') {
      setPasswordEye('/eye close.svg')
      setPasswordShow('text')
    }
    else {
      setPasswordEye('/eye.svg')
      setPasswordShow('password')
    }
  }

  const hideShowConfPassword = () => {
    if (confPasswordEye === '/eye.svg') {
      setConfPasswordEye('/eye close.svg')
      setConfPasswordShow('text')
    }
    else {
      setConfPasswordEye('/eye.svg')
      setConfPasswordShow('password')
    }
  }

  const uploadRegist = async () => {
    if (registerData.firstName === '') {
      alert("Please fill in your first name")
      return
    } else if (registerData.lastName === '') {
      alert("Please fill in your last name")
      return
    } else if (registerData.userName === '') {
      alert("Please fill in your username")
      return
    } else if (registerData.password === '') {
      alert("Please fill in your password")
      return
    } else if (registerData.confPassword !== registerData.password) {
      alert("Please confirm your password correctly")
      return
    }
    const upload = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        userName: registerData.userName,
        password: bcrypt.hash(registerData.password, 10)
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if(upload.ok){
        alert("Registered successfully")
        router.push('/login')
    } else {
      alert("server error")
    }
}

  return (
    <div className='flex items-center justify-center'>
        <div className='w-[45vw]'>
            <p className='text-center mb-[1.5vw] text-[2vw] font-[700]'>Registrasi</p>
            <input type='text' placeholder='Nama Depan' className={className} onChange={(e) => {
                setRegisterData({
                  lastName: registerData.lastName,
                  userName: registerData.userName,
                  password: registerData.password,
                  confPassword: registerData.confPassword,
                  firstName: e.target.value,
                })
            }}/>
            <input type='text' placeholder='Nama Belakang' className={className} onChange={(e) => {
                setRegisterData({
                firstName: registerData.firstName,
                userName: registerData.userName,
                password: registerData.password,
                confPassword: registerData.confPassword,
                lastName: e.target.value,
              })
            }}/>
            <input type='text' placeholder='Username' className={className} onChange={(e) => {
                setRegisterData({
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                password: registerData.password,
                confPassword: registerData.confPassword,
                userName: e.target.value,
              })
            }}/>
            <div>
              <Image src={`${passwordEye}`} alt='' width='5' height='5' onClick={() => hideShowPassword()} className='w-[2.25vw] absolute ml-[28.5vw] mt-[0.5vw] opacity-50'></Image>

              <input type={`${passwordShow}`} placeholder='Kunci Sandi' className={className} onChange={(e) => {
                setRegisterData({
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                userName: registerData.userName,
                confPassword: registerData.confPassword,
                password: e.target.value,
              })
            }}/>
            </div>
            <div>
              <Image src={`${confPasswordEye}`} alt='' width='5' height='5' onClick={() => hideShowConfPassword()} className='w-[2.25vw] absolute ml-[28.5vw] mt-[0.5vw] opacity-50'></Image>

              <input type={`${confPasswordShow}`} placeholder='Konfirmasi Kunci Sandi' className={className} onChange={(e) => {
                if (e.target.value !== registerData.password) {
                  return(
                    <p className='text-red-500'>Please fill in the correct password</p>
                  )
                } else{
                  setRegisterData({
                  firstName: registerData.firstName,
                  lastName: registerData.lastName,
                  userName: registerData.userName,
                  password: registerData.password,
                  confPassword: e.target.value,
                })
              }
              }}/>
            </div>
            <p className='text-center'>Dengan masuk atau mendaftar, saya menyetujui</p>
            <p className='text-center text-[#7BD3EA] font-[500]'>Ketentuan Penggunaan dan Kebijakan Privasi</p>
            <button className='w-full  bg-[#A1EEBD] px-[1.5vw] py-[0.5vw] my-[1vw] rounded-[1vw] font-[600]' onClick={() => {uploadRegist()}}>Lanjut</button>
            <p className='text-center'>Sudah memiliki akun? <span className='text-[#8CC0DE] font-[600]'><a href="/login">Masuk</a></span></p>
        </div>
    </div>
  )
}

export default RegisterPage