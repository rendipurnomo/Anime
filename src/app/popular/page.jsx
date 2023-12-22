'use client';

import AnimeList from '@/components/animeList/AnimeList';
import HeaderMenu from '@/utils/HeaderMenu';
import Pagination from '@/utils/Pagination';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';
import { getAnimeResponse } from '@/libs/api';

const Popular = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const popular = await getAnimeResponse('top/anime', `page=${page}`);
      setAnime(popular);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Popular #${page}`} />
      {loading ? <Loading /> : <AnimeList api={anime} />}
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={anime.pagination?.last_visible_page}
      />
    </>
  );
};

export default Popular;
