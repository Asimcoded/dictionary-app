import React from "react";
import SearchBar from "./SearchBar";
import MeaningBox from "./MeaningBox";

function MeaningPage({ value }) {
  return (
    <div className="mx-5 my-10">
      <SearchBar value={value} />
      <div className="max-w-[600px] w-full relative bg-backgroundLight mx-auto mt-16 pt-20 pb-10 rounded-3xl">
        <div className="w-full h-[100px] bg-secondary rounded-full flex justify-between items-center px-3 outline-none absolute top-[-30px] left-0">
          <div>
            <h1 className="text-textDark font-bold text-3xl ml-5">heelo</h1>
            <p className="text-primary ml-10">/həˈləʊ/</p>
          </div>
          <button className="transition duration-200 hover:opacity-60">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#00B2D6" />
              <path
                d="M23.5 47.5H20.5V32.5H23.5V47.5ZM32.5 26.5H29.5V53.5H32.5V26.5ZM41.5 19H38.5V61H41.5V19ZM50.5 32.5H47.5V47.5H50.5V32.5ZM59.5 26.5H56.5V53.5H59.5V26.5Z"
                fill="#DBD6FF"
              />
            </svg>
          </button>
        </div>

        <MeaningBox />

      </div>
    </div>
  );
}

export default MeaningPage;
