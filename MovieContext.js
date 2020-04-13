import React, { useState, createContext } from 'react';



export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [ movies, setMovies] = useState([
   {
     name:'Harry Potter',
     price:'$12',
     id:111
   },
   {
     name:'Game of thrones',
     price:'$31',
     id:1231
   },
   {
     name:'Inception',
     price:'$30',
     id:54
   }
 ]);
  return(
    <MovieContext.Provider value={[ movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}