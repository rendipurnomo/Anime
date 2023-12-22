'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CollectionBtn = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [created, setCreated] = useState(false);

  const router = useRouter();

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    };
    const response = await fetch('/api/v1/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const collection = await response.json();

    if (collection.isCreated) {
      setCreated(true);
      router.refresh();
    }
    return;
  };
  return (
    <>
      {created ? (
        <p className="text-color-secondary">in collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="bg-color-secondary px-4 py-2 max-w-[200px]">
          Add to collection
        </button>
      )}
    </>
  );
};

export default CollectionBtn;
