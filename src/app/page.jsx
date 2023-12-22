import AnimeList from '@/components/animeList/AnimeList';
import Header from '@/components/animeList/Header';
import Banner from '@/components/banner';
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from '@/libs/api';

const Home = async () => {
  const TopAnime = await getAnimeResponse('top/anime', 'limit=8');
  let Recommendation = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  );
  Recommendation = reproduce(Recommendation, 4);

  return (
    <section className="p-4 md:px-8">
      <Banner link={TopAnime} />
      {/* popular */}
      <Header linkHref={'/popular'} linkText={'See more'} title={'Popular'} />
      <AnimeList api={TopAnime} />

      {/* recomendation */}
      <Header title={'Recommendation'} />
      <AnimeList api={Recommendation} />
    </section>
  );
};

export default Home;
