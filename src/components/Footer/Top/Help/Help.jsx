import React from 'react'

const Help = () => {
  return (
    <div>
      <h3 className="text-purple-dark font-semibold text-[18px] mb-4 text-center md:text-left">
      Yardıma mı ihtiyacın var?
      </h3>
      <ul className='flex flex-col gap-2 items-center md:items-start'>
        <li>
          <a href="#">Sıkça Sorulan Sorular</a>
        </li>
        <li>
          <a href="#">Kişisel Verilerin Korunması</a>
        </li>
        <li>
          <a href="#">Gizlilik Politikası</a>
        </li>
        <li>
          <a href="#">Kullanım Koşulları</a>
        </li>
        <li>
          <a href="#">Çerez Politikası</a>
        </li>
        <li>
          <a href="#">İşlem Rehberi</a>
        </li>
      </ul>
    </div>
  )
}

export default Help