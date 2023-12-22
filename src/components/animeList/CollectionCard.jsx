'use client';

import Image from 'next/image';
import Link from 'next/link';

const CollectionCard = ({ anime_mal_id, anime_image, anime_title }) => {
  return (
    <Link
      href={`/anime/${anime_mal_id}`}
      className="relative border-2 h-[300px] text-color-light/0 hover:text-color-black border-color-secondary after:absolute after:backdrop-blur-sm after:content-[''] after:bg-color-light/20 after:h-20 after:bottom-0 after:w-full after:translate-y-full overflow-hidden after:text-color-light hover:after:translate-y-0 after:transition-all duration-200">
      <Image
        className="object-cover object-center  rounded"
        src={anime_image}
        alt={anime_title}
        width={300}
        height={450}
        priority
      />
      <div className="p-2 w-full z-10 absolute bottom-0 flex justify-center items-center h-20">
        <h5 className="font-semibold">{anime_title}</h5>
      </div>
    </Link>
  );
};

export default CollectionCard;
