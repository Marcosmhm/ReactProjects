import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
        history.goBack
      };
    },
    [ref, handler]
  );
}

export default function SeachModal({ onClose }) {
  const ref = useRef();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    navigate(`/search/?query=${(event.target.value)}`)
  };

  useOnClickOutside(ref, () => onClose(false));

  return (
    <>
      <div className="search-modal" ref={ref}>
        <div className="search-modal-content">
          <input
            className="search-input"
            type="text"
            placeholder="Search for a movie, tv show or person"
            value={searchValue}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
      </div>
    </>
  )
}