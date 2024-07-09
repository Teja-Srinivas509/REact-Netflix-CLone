import React, { useEffect, useState } from 'react'
import '../Player/Player.css'
import back_arrow from '../../assets/back_arrow.jpg'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function Player() {
    const [data,setData]=useState({
        name:'',
        key:'',
        published_at:'',
        typeof:''
    })
    const {id} =useParams()
    {console.log({id});}

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODEyODVjZjIzZmU4OGJjOWQ4NTU0NDk0NzFjM2VhYyIsIm5iZiI6MTcyMDI3NjA2NS44ODUzMzUsInN1YiI6IjY2MjE0ZTRmODdhZTdiMDE0Y2Q3YzkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KapnJglPDgXm42Z40-DGLQf4gtY86pnj5CJW-zSp-tc'
        }
      };
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setData(response.results[0]))
        .catch(err => console.error(err));
      },[])
      const handleClick=()=>{
        window.location.href='/'
      }
  return (
    <div className='player'>
      <img src={back_arrow} onClick={handleClick} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${data.key}`}
      title='trailer' allowFullScreen></iframe>
    {  console.log(`https://www.youtube.com/embed/${data.key}`)}
      <div className='player-info'>
        <p>{data.published_at.slice(0,10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  )
}

export default Player
