import React from 'react'
import  './List.css'

const List = () => {
  return (
   <>
   <h1>Products</h1>
   <article>
    <span className='card'>
        <img src='https://m.media-amazon.com/images/I/71WqlOm7NIL._AC_UY1100_.jpg'></img>
        <h1>Gojo Saturo</h1>
    </span>
    <span className='card'>
        <img src='https://www.deshidukan.in/cdn/shop/files/OS-2309-06B-B-min_800x800_crop_center@2x.jpg?v=1712050343'></img>
        <h1>Uzumaki Naruto</h1>
    </span>
    <span className='card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCYIV7vWzj4bYYJpi9Mmw5zYMZxc_XCRYuA&s'></img>
        <h1>Monkey D Luffy </h1>
    </span>
   </article>
   </>
  )
}

export default List