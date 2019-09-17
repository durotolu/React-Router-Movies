import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Movie from './Movie';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {debugger
       return (
      <NavLink to={`/movies/${movie.id}`}><span key={movie.title} className="saved-movie">{movie.title}</span></NavLink>
    )})}
    
    <NavLink to="/"><div className="home-button">Home</div></NavLink>
  </div>
);

export default SavedList;
