import AnimeList from '@/components/animeList/AnimeList';
import Header from '@/components/animeList/Header';
import { getAnimeResponse } from '@/libs/api';

const Search = async ({ params }) => {
  const { keyword } = params;

  const decodeKeyword = decodeURIComponent(keyword);

  const searchAnime = await getAnimeResponse('anime', `q=${decodeKeyword}`);

  return (
    <section className='p-4 md:px-8'>
      <Header title={`Search results for ${decodeKeyword}`} />
      <AnimeList api={searchAnime} />
    </section>
  );
};

export default Search;
