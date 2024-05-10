'use client';
import React from 'react'

const ChooseCategory = ({
    category,
    isSelected,
}:{
    category: string,
    isSelected: boolean,
}) => {
    if (isSelected) {
        return (
            <div className='w-fit px-[1vw] py-[0.35vw] text-[1vw] font-[500] border-[#8CC0DE] border-[0.25vw] bg-[#8CC0DE] cursor-pointer transition-colors duration-500'>
                {category}
            </div>
          )
    } else {
        return (
          <div className='w-fit px-[1vw] py-[0.35vw] text-[1vw] font-[500] border-[#8CC0DE] border-[0.25vw] cursor-pointer transition-colors duration-500'>
              {category}
          </div>
        )
    }
}

export default ChooseCategory