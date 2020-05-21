import React from 'react'

export default function DisplayMovie({displayMovie}) {

    return(
        <div className="card">
                    <img className="card--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${displayMovie.poster_path}`}
                    alt={displayMovie.title + ' poster' }/>
                    <div className="card--content">
                        <h3 className="card--title">{displayMovie.title}</h3>
                        <p><small>RELEASE DATE: {displayMovie.release_date}</small></p>
                        <p><small>RATING: {displayMovie.vote_average}</small></p>
                        <p className="card--desc">{displayMovie.overview}</p>
                    </div>
                </div>
    )

}