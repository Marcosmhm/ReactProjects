import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export default function FavoriteMedia({ data, getUserData, handleClick, className, type }) {


  const handleNotLoggedClick = () => {
    toast.info('You must log in first!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <>
      {localStorage.getItem('isLoggedIn') === 'true' ? (
        getUserData.includes(data.id) ? (
          <span className={className} onClick={() => handleClick(type, data.id, false)}>
            <AiFillHeart color="rgb(39, 121, 167)" />
          </span>
        ) : (
          <span className={className} onClick={() => handleClick(type, data.id, true)}>
            <AiOutlineHeart color="rgb(39, 121, 167)" />
          </span>
        )
      ) : (
        <>
          <span className={className} onClick={handleNotLoggedClick}>
            <AiOutlineHeart color="rgb(39, 121, 167)" />
          </span>
        </>
      )}
    </>
  )
}