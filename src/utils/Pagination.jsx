import React from 'react';

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (page < lastPage) {
      setPage((prev) => prev + 1);
      scrollToTop();
    }
  };
  return (
    <div className="flex gap-4 justify-center items-center py-10">
      <button
        onClick={handlePrev}
        className={` ${
          page > 1 ? 'hover:text-color-secondary' : 'cursor-not-allowed'
        }`}>
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button onClick={handleNext} className="hover:text-color-secondary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
