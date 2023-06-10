import React, {useState , useEffect}from "react";
import './row.css'
import { Action } from "../Actionmovie/Action";
import { Comedy } from "../comedymovie/comedy";



const Row = (pops) => {


  return (
    <div className="header">
      <div className="row-header">
        <h1>Action</h1> 
      </div>

      <div className="firsrtRow-images">
        <Action />
      </div>
      <div className="row-header">
        <h1>Comedy</h1>
      </div>
      <div className="firsrtRow-images">
        <Comedy isSmall={true}/>
      </div>

    </div>
  );
};

export default Row;
