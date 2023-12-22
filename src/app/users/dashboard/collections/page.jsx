import Header from '@/components/Dashboard/Header';
import { authUserSession } from '@/libs/auth';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/libs/prisma';
import CollectionCard from '@/components/animeList/CollectionCard';

const Collections = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });


  return (
    <section className="mt-4 px-4 md:px-8">
      <Header title={'My collections'} />
      {collection.length === 0 ? (
        <p className="text-center font-semibold text-xl mb-5">
          Anda tidak memiliki collections anime
        </p>
      ) : (
        <>
          <p className="text-center font-semibold text-xl mb-5">
            Anda memiliki {collection.length} collections anime
          </p>
          <div className="grid place-content-center sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {collection.map((collection) => (
              <CollectionCard key={collection.id} {...collection} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Collections;
