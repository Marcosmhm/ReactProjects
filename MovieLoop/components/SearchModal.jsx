import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { searchMulti } from "../services/api";

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
      };
    },
    [ref, handler]
  );
}

export default function SeachModal({ onClose }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    navigate(`/search?query=${(event.target.value)}`)
  };

  useEffect(() => {
    searchMulti(searchValue)
  }, [searchValue])
  useOnClickOutside(modalRef, () => onClose(false))

  return (
    <>
      <div className="search-modal" ref={modalRef}>
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