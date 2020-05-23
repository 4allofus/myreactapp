import React, {useState} from 'react'
import DisplayMovie from './displayMovie'

function SearchMovies(){

    //states - input query, movies
    const [query, setQuery] = useState('')
    //states - output movie, movies
    const [movie, getMovies] = useState([])

    const searchMovies =async(e) => {
        e.preventDefault()
        //alert("submit!!")
    
        //const query = "step up";
        
        try{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=1c963e0bb9546bfc655cd410aca57872&language=en-US&query=${query}&page=1&include_adult=false`;

        //const url = `https://api.themoviedb.org/3/movie/550?api_key=1c963e0bb9546bfc655cd410aca57872`
            const res = await fetch(url)
            const data = await res.json()
            //console.log(data.results)
            getMovies(data.results)
        }
        catch(err){
            //alert(err)
        }
    }

    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie name : </label>
            <input className="input" type="text" required="required" name="query" placeholder="the matrix, jurassic"
            value={query} onChange={(e) => setQuery(e.currentTarget.value)}/>
            <button className="button" type="submit">search</button>
        </form>
        <div className="display-list">
            {movie.filter(displayMovie => displayMovie.poster_path).map(displayMovie => (
                <DisplayMovie displayMovie={displayMovie} key={displayMovie.id} />
            ))}
        </div>
        </>
    )
}

export default SearchMovies