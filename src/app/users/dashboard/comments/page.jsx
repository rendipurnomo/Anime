import Header from '@/components/Dashboard/Header';
import { RatingStar } from '@/components/animeList/CommentBox';
import { authUserSession } from '@/libs/auth';
import prisma from '@/libs/prisma';
import Link from 'next/link';

const Comments = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user.email,
    },
  });
  return (
    <section className="mt-4 px-4 md:px-8">
      <Header title={'My comments'} />
      {comments.length === 0 ? (
        <p className="text-center">Anda belum mengomentari anime</p>
      ) : (
        <div className="flex flex-wrap flex-col gap-4">
          {comments.map((comment) => (
            <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id}>
              <div className="flex flex-col gap-1 max-w-[350px]">
                <div className="flex items-center gap-4">
                  <p className="font-semibold">@{comment.username}</p>
                  {comment.rating === 0 ? null : (
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <RatingStar key={i} full={i < comment.rating} />
                      ))}
                    </div>
                  )}
                </div>
                <div className=" h-auto bg-color-light rounded-ss-2xl rounded-ee-2xl text-color-dark p-2">
                  <p className="font-semibold text-color-secondary">@{comment.anime_title}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Comments;
