
import React from 'react'
import HomeContainer from '@/containers/home'

import {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchGenres,
    fetchMoviesByGenre
} from "@/services/movie"


async function homePage({ params }) {
    const pagePromises = [
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchGenres(),
    ]

    if (!!params.category?.length) {
        pagePromises.push(fetchMoviesByGenre(params.category[0]));
    }

    const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
        await Promise.all(pagePromises)

    return (
        <HomeContainer
            categories={genres}
            popularMovies={popularMovies}
            topRatedMovies={topRatedMovies}
            selectedCategories={{
                id: params.category?.[0] ?? "",
                movies: selectedCategoryMovies ?? [],
            }}
        />
    );
}

export default homePage
