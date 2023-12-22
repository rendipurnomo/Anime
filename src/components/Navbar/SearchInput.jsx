"use client"
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current?.value;
    if (!keyword || keyword.trim() == '') return;
    router.push(`/search/${keyword}`);
  };
  return (
    <div className="flex items-center gap-2 border-2 border-slate-300 p-2 rounded-md bg-color-light">
      <button type="submit" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#474747"
          viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </button>
      <input
        ref={searchRef}
        type="search"
        placeholder="Search"
        className="ring-0 outline-none w-full text-color-dark"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
      />
    </div>
  );
};

export default SearchInput;
