import React from "react";
import { useState } from "react";
function SearchBar({ value = ""}) {
  const [inputValue,setInputValue] = useState(value)
  function onInputChange(e){
    setInputValue(e.target.value)
  }
  return (
    <div className="max-w-[600px] w-full h-[70px] bg-backgroundLight flex rounded-full p-[10px] justify-center mx-auto my-10">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Serach for the word..."
        className="w-full rounded-l-full bg-trans outline-none text-lg pl-5 text-textLight"
      />
      <button className="transition duration-200 hover:opacity-60">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#00B2D6" />
          <path
            d="M34.9522 36.7857L26.7022 28.5357C26.0474 29.0595 25.2945 29.4742 24.4433 29.7797C23.5921 30.0853 22.6863 30.2381 21.726 30.2381C19.347 30.2381 17.3337 29.4142 15.6858 27.7663C14.038 26.1185 13.2141 24.1051 13.2141 21.7262C13.2141 19.3472 14.038 17.3338 15.6858 15.686C17.3337 14.0382 19.347 13.2143 21.726 13.2143C24.105 13.2143 26.1184 14.0382 27.7662 15.686C29.414 17.3338 30.2379 19.3472 30.2379 21.7262C30.2379 22.6865 30.0851 23.5922 29.7796 24.4434C29.474 25.2946 29.0593 26.0476 28.5355 26.7024L36.7855 34.9524L34.9522 36.7857ZM21.726 27.619C23.3629 27.619 24.7543 27.0461 25.9001 25.9003C27.046 24.7544 27.6189 23.3631 27.6189 21.7262C27.6189 20.0893 27.046 18.6979 25.9001 17.5521C24.7543 16.4062 23.3629 15.8333 21.726 15.8333C20.0891 15.8333 18.6977 16.4062 17.5519 17.5521C16.4061 18.6979 15.8332 20.0893 15.8332 21.7262C15.8332 23.3631 16.4061 24.7544 17.5519 25.9003C18.6977 27.0461 20.0891 27.619 21.726 27.619Z"
            fill="#DBD6FF"
          />
        </svg>

        <path
          d="M48.9333 51.5L37.3833 39.95C36.4667 40.6833 35.4125 41.2639 34.2208 41.6917C33.0292 42.1194 31.7611 42.3333 30.4167 42.3333C27.0861 42.3333 24.2674 41.1799 21.9604 38.8729C19.6535 36.566 18.5 33.7472 18.5 30.4167C18.5 27.0861 19.6535 24.2674 21.9604 21.9604C24.2674 19.6535 27.0861 18.5 30.4167 18.5C33.7472 18.5 36.566 19.6535 38.8729 21.9604C41.1799 24.2674 42.3333 27.0861 42.3333 30.4167C42.3333 31.7611 42.1194 33.0292 41.6917 34.2208C41.2639 35.4125 40.6833 36.4667 39.95 37.3833L51.5 48.9333L48.9333 51.5ZM30.4167 38.6667C32.7083 38.6667 34.6562 37.8646 36.2604 36.2604C37.8646 34.6562 38.6667 32.7083 38.6667 30.4167C38.6667 28.125 37.8646 26.1771 36.2604 24.5729C34.6562 22.9688 32.7083 22.1667 30.4167 22.1667C28.125 22.1667 26.1771 22.9688 24.5729 24.5729C22.9688 26.1771 22.1667 28.125 22.1667 30.4167C22.1667 32.7083 22.9688 34.6562 24.5729 36.2604C26.1771 37.8646 28.125 38.6667 30.4167 38.6667Z"
          fill="#DBD6FF"
        />
      </button>
    </div>
  );
}

export default SearchBar;
