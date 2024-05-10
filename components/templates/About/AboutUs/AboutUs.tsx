import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='mt-[3vw] mx-[8vw]'>
        <p className='text-center font-[700] text-[2vw] mb-[1.5vw] px-[1.5vw] py-[0.75vw] bg-[#F6F7C4] border-[#D7E5CA] border-[0.25vw] rounded-[1.5vw]'>About Us</p>
        <div className='flex gap-[8vw] items-end text-justify'>
          <p>Kesehatan mental atau mental health merujuk kepada suatu kondisi kesehatan secara emosional dan psikologis, dimana kesehatan mental berpengaruh pada pemberdayaan tiap individu dalam mengatasi permasalahan di dalam hidup mereka, tingkat kesejahteraan hidup, kemampuan untuk belajar dan bekerja dengan baik, serta mampu ikut serta berpartisipasi dalam kehidupan bermasyarakat. Belakangan ini, Indonesia mengalami kesulitan dan tantangan yang semakin serius terkait kesehatan mental, terutama di kalangan generasi muda. Dilansir dari data Indonesia National Adolescent Mental Health Survey (I-NAMHS), dinyatakan bahwa satu dari tiga remaja Indonesia memiliki masalah kesehatan mental sementara satu dari dua puluh remaja Indonesia memiliki gangguan mental dalam 12 bulan terakhir. Angka ini setara dengan 15,5 juta dan 2,45 juta remaja. Masalah kesehatan mental di Indonesia disebabkan oleh beberapa faktor, seperti kurangnya fasilitas atau layanan kesehatan mental yang memadai, keterbatasan akses terhadap perlindungan dan pemeliharaan kesehatan mental, serta kurangnya kesadaran masyarakat tentang pentingnya kesehatan mental, ditambah banyaknya stigma negatif terhadap kepedulian kesehatan mental dari lingkungan sosial semakin memperburuk situasi yang ada.</p>
          <Image src='/header illustration.svg' alt='' width='5' height='5' className='w-[25vw]'></Image>
        </div>
    </div>
  )
}

export default AboutUs