import { useState, useEffect } from "react";

import Axios from "axios";
import { API_KEY, ImageUrl } from "../constants/constant";

export const Action = (props) => {
    const [actionmovies ,setActionMovies] = useState([])

  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((res) => {
      setActionMovies(res?.data?.results)
    })
  },[])

    return (
       <>
            {actionmovies.map((movie,index)=>(
                <img key={movie?.id} className={props.isSmall ? 'isSmall' : 'poster'}
                src={`${ImageUrl}${movie ?.backdrop_path}`} alt="" />
            ))}
       </>
    )
}

