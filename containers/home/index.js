
import React from 'react'

import FeaturedMovie from '@/components/featured-movies';
import Categories from "@/components/categories"
import MoviesSection from '@/components/movies-section';

function HomeContainer({
    popularMovies,
    topRatedMovies,
    categories,
    selectedCategories
}) {
    return (
        <div>
            <FeaturedMovie
                movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
            />
            <Categories
                categories={categories.slice(0, 5)}
            />
            {!!selectedCategories.movies.length && (
                <MoviesSection
                    title={categories.find(({ id }) => id === +selectedCategories.id)?.name}
                    movies={selectedCategories.movies.slice(1, 7)}
                />
            )}
            <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
            <MoviesSection
                title="Your favorites"
                movies={topRatedMovies.slice(1, 7)}
            />
        </div>
    );
}


export default HomeContainer
