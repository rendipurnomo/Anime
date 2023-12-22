'use client';
import React, { useState } from 'react';

const Sinopsis = ({ text }) => {
  const [read, setRead] = useState(false);

  const handleSynopsis = () => {
    setRead(!read);
  };

  const shortDescription = text?.substring(0, 200);

  if(text?.length < 200) {
    return (
      <>
        <p>{text}</p>
      </>
    )
  }
  return (
    <>
      {!read ? (
        <>
          <p>
            {shortDescription}{' '}
            <span>
              <button
                className="underline text-color-secondary hover:text-color-secondary"
                onClick={handleSynopsis}>
                Read more.
              </button>
            </span>
          </p>
        </>
      ): (
        <>
        <p>{text} {' '}
        <span>
          <button
            className="underline text-color-secondary hover:text-color-secondary"
            onClick={handleSynopsis}>
            Read less.
          </button>
        </span>
        </p>
        </>
      )}
    </>
  );
};

export default Sinopsis;
