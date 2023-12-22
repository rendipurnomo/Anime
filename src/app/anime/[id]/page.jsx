import CollectionBtn from '@/components/animeList/CollectionBtn';
import { getAnimeResponse } from '@/libs/api';
import { authUserSession } from '@/libs/auth';
import Sinopsis from '@/utils/Sinopsis';
import Youtube from '@/utils/Youtube';
import Image from 'next/image';
import prisma from '@/libs/prisma';
import CommentInput from '@/components/animeList/CommentInput';
import CommentBox from '@/components/animeList/CommentBox';

const Detail = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });

  if (data.trailer.embed_url === null && data.images.webp.image_url === null) {
    return (
      <div className="flex flex-col gap-4 my-10 px-4 md:px-8">
        <h2 className="font-bold text-xl">No Video and Image</h2>
      </div>
    );
  }

  if (data.trailer.embed_url === null) {
    return (
      <div className="flex flex-col md:flex-row gap-4 my-10 px-4 md:px-8">
        <Image
          width={500}
          height={700}
          src={data.images.webp.image_url}
          alt={data.title}
        />
        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-bold text-xl">{data.title}</h2>
          {!collection && user ? (
            <CollectionBtn
              anime_mal_id={id}
              user_email={user?.email}
              anime_image={data.images.webp.image_url}
              anime_title={data.title}
            />
          ) : null}

          <p>Episodes: {data.episodes}</p>
          <p className="font-bold">Score: {data.score}</p>
          <p>{data.background}</p>
          {data.synopsis ? <Sinopsis text={data.synopsis} /> : null}
        </div>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={data.title}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-10 px-4 md:px-8">
      <Youtube link={data.trailer?.embed_url} />
      <div className="flex flex-col gap-4 w-full">
        <h2 className="font-bold text-xl">{data.title}</h2>
        {!collection && user ? (
          <CollectionBtn
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={data.images.webp.image_url}
            anime_title={data.title}
          />
        ) : null}
        <p>Episodes: {data.episodes}</p>
        <p className="font-bold">Score: {data.score}</p>
        <p>{data.background}</p>
        {data.synopsis ? <Sinopsis text={data.synopsis} /> : null}
      </div>
      <CommentBox anime_mal_id={id} />
      {user && <CommentInput
        anime_mal_id={id}
        user_email={user?.email}
        username={user?.name}
        anime_title={data.title}
      />}
    </div>
  );
};

export default Detail;
