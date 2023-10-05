import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export default function FavoriteMedia({data, getUserData, handleClick, className, type}) {

  return (
    <>
    {localStorage.getItem('isLoggedIn') === 'true' &&
    (getUserData.includes(data.id) ?
      <span className={className} onClick={() => handleClick(type, data.id, false)}><AiFillHeart color="rgb(39, 121, 167)"/></span> :
      <span className={className} onClick={() => handleClick(type, data.id, true)}><AiOutlineHeart color="rgb(39, 121, 167)" /></span>
    )}
    </>
  )
}