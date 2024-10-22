import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import styles from "./styles.module.css";

function MoviesSection({ title, movies }) {
    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {movies.map((movie) => (
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`} className={styles.movieLink}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    fill
                                    unoptimized
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    className={styles.movieImage}
                                />
                                <div className={styles.ratingWrapper}>
                                    <span className={styles.ratingText}>IMDB: {movie.vote_average.toFixed(1)}</span>
                                    <FaStar className={styles.starIcon} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesSection;
