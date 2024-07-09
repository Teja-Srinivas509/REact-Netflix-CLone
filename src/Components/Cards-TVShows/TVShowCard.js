import { Link } from 'react-router-dom'
import TVShowCard_img from '../../assets/TvShowcard.jpg'
import { useState,useEffect } from 'react'
import './TVShowCard.css'
function TVShowCard({title,category}) {
    const [TvData,setTvData]=useState([])
    
    useEffect(() => {
        let apiUrl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1`;
    
        if (category) {
            apiUrl = `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`;
        }
    
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(data => setTvData(data.results))
            .catch(err => console.error(err));
    }, [category]);
    

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODEyODVjZjIzZmU4OGJjOWQ4NTU0NDk0NzFjM2VhYyIsIm5iZiI6MTcyMDI3NjA2NS44ODUzMzUsInN1YiI6IjY2MjE0ZTRmODdhZTdiMDE0Y2Q3YzkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KapnJglPDgXm42Z40-DGLQf4gtY86pnj5CJW-zSp-tc'
        }
      };
    
  return (
    <div className='TVShowCard'>
        <h2>{title?title:'Trending TV Shows'}</h2>

        <div className='TVcards-list'>
        {
        TvData.map((TvCard,index)=>{
            return <Link to={`/TVShow/player/${TvCard.id}`} className='TvCard' key={index}>
                <img src={TvCard.backdrop_path ? `https://image.tmdb.org/t/p/w500/`+ TvCard.backdrop_path :TVShowCard_img} alt='card' className='Tvcard-img'/>
                <p className='Tvcard-title'>{TvCard.name}</p>
            </Link>
        })
        }
        </div>
      
    </div>
  )
}

export default TVShowCard
