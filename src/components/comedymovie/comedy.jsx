import { useState, useEffect } from "react";
import Axios from "axios";
import { API_KEY, ImageUrl } from "../constants/constant";

export const Comedy =(props) => {

    const [comedymovie, setComedyMovies] = useState([]);

    useEffect(() => {
    Axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`).then(({ data }) => {
        setComedyMovies(data?.results);

        console.log(data?.results);
    })
    }, [])

    return (
        <>
        {
            comedymovie.map((movie, index) => (
                <img
                    key={movie?.id}
                    className={props.isSmall ? "isSmall" : "poster"}
                    src={`${ImageUrl}${movie?.backdrop_path}`}
                    alt=""
                />
            ))
        }
        </>
    )

}

