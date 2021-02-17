import React from 'react';

const MovieAppDisplay = ({movie}) => {
    return(
        <div> 
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h5>{movie.original_title}</h5>
            <p>{movie.overview}</p>
        </div> 
    )
}

export default MovieAppDisplay;