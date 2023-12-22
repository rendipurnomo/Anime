import Sinopsis from '@/utils/Sinopsis';
import Image from 'next/image';
import React from 'react';

const Banner = ({ link }) => {
  const top = Math.floor(Math.random() * link.data.length) + 1;
  const trailer = link.data[top]?.trailer?.embed_url;
  return (
    <div className="flex flex-col md:flex-row gap-4 my-10">
      {trailer ? (
        <iframe
          className="rounded-3xl w-full md:w-[60%] aspect-video"
          allowFullScreen
          width="300"
          height="350"
          title="trailer"
          src={trailer}></iframe>
      ) : (
        <Image
          width={500}
          height={500}
          className="rounded-3xl w-full md:w-[60%] h-[350px] object-cover object-center aspect-auto shadow-md shadow-color-light/40"
          src={link.data[top]?.images?.webp.image_url}
        />
      )}
      <div className="flex flex-col gap-4 w-full md:w-[40%]">
        <h2 className="font-bold text-xl">{link.data[top]?.title}</h2>
        <p>{link.data[top]?.background}</p>
        <p className="font-bold">Score: {link.data[top]?.score}</p>
        <p>Episodes: {link.data[top]?.episodes}</p>
        <Sinopsis text={link.data[top]?.synopsis} />
      </div>
    </div>
  );
};

export default Banner;
