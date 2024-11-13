import React from 'react'

const Explore = () => {
  return (
    <div>
      <h3 className="text-purple-dark font-semibold text-[18px] mb-4 text-center md:text-left">
        Getir'i keşfet
      </h3>
      <ul className='flex flex-col gap-2 items-center md:items-start'>
        <li>
          <a href="#">Hakkımızda</a>
        </li>
        <li>
          <a href="#">Kariyer</a>
        </li>
        <li>
          <a href="#">Teknoloji Kariyerleri</a>
        </li>
        <li>
          <a href="#">İletişim</a>
        </li>
        <li>
          <a href="#">Sosyal Sorumluluk Projeleri</a>
        </li>
        <li>
          <a href="#">Basın Bültenleri</a>
        </li>
      </ul>
    </div>
  )
}

export default Explore