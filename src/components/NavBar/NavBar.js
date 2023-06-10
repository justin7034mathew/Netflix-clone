import React from "react";
import "./NavBar.css";
import { API_KEY, ImageUrl } from "../constants/constant";
import { useState , useEffect} from "react";
import Axios from "axios";

const NavBar = () => {

const [banner , setBanner] = useState()

useEffect(() => {
  Axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
    setBanner(res.data.results[0])
  }) 
},[])

  return (

    <div className="navBar-section">
      <div className="nav-image">
        <img src={`${ImageUrl}${banner?.backdrop_path}`} alt="" />
      </div>
      <div className="nav-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      </div>
      <div className="nav-avatar">
        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
      <div className="movie-detail">
        <h1>{banner && banner.title }</h1>
        <button>Play</button>
        <button>My List</button>
        <p>{banner && banner.overview}</p>
      </div>
    </div>
  );
};

export default NavBar;
