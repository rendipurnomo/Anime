import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      {api.data?.map((anime) => (
        <Link
          key={anime.mal_id}
          href={`/anime/${anime.mal_id}`}
          className="flex flex-col gap-2 items-center rounded-xl cursor-pointer">
          <Image
            src={anime.images.webp.image_url}
            alt="card anime"
            width={250}
            height={350}
            priority
            className="rounded-t-xl h-[350px] object-cover object-center aspect-auto hover:scale-105 transition-all duration-150 shadow-md shadow-color-light/40"
          />
          <h3 className="bg-gradient-to-b from-color-dark to-color-light/30 rounded-b-xl text-color-light text-sm font-bold w-full max-w-[250px] p-2 text-center hover:text-color-secondary transition-all duration-150 h-14 flex items-center justify-center">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
