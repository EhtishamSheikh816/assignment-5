import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen'>
      <div className='flex h-[80%] mx-36'>
        <div className='w-3/4 flex flex-col justify-center items-start m-12'>
          <h1 className='font-bold text-[37.84px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className='font-medium text-[25px] text-[#787054] py-5'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className='bg-[#A29875] text-white py-1 px-5 rounded' type="button">Explore Now</button>
        </div> 
        <div className='w-1/2 flex justify-center'>
          <Image src="/image/jeweller.svg" width={250} height={250} alt='jeweller pic' />
        </div>
      </div>
    </div>
  )
}

// width: Fixed (247.67px)px;
// height: Hug (49.2px)px;
// top: 710.32px;
// left: 107.49px;
// padding: 8.6px 0px 0px 0px;
// gap: 8.6px;
// border-radius: 8.6px 0px 0px 0px;
// opacity: 0px;



