import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Add from './Components/Add';
import Filtre from './Components/Filtre';
import { useSelector } from 'react-redux';



function App() {
  const moviesdata = useSelector(state => state.Movie);
  const search = useSelector(state => state.Name);
  const ratee = useSelector(state => state.Rate);

  const showing =(moviesdata,search,rate) =>{
    return moviesdata.filter(el=>el.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && el.rating >= ratee )
  }

  console.log('search',search)
  console.log('rate', ratee)
  return (
    <div className="movieapp">
      <Filtre />
      <MovieList movieList={showing(moviesdata,search,ratee) /*.filter(el=>el.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && el.rating >= rate*/} />
      
      <Add />
    </div>
  );
}

export default App;
