
import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation';

import { fetchSingleMovie } from '@/services/movie';



async function MoviePage({ params, searchParams }) {
  // VERİTABANI OLMADAN LOADİNG ERKANI GÖSTERMEK İÇİN YAPILDI 
  // const movieDetail = Movies.results.find((movie) => movie.id === Number(params.id))
  const movieDetail = await fetchSingleMovie(params.id);

  if (movieDetail.success === false) {
    notFound()
  }
  if (searchParams.error === "true") {
    throw new Error("Error Happened")
  }

  return <MovieContainer movie={movieDetail} />
}

export default MoviePage
