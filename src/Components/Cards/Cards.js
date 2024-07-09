import React, { useEffect, useRef, useState } from 'react'
import card1 from '../../assets/cardsjpg.jpg'
import './Cards.css'
import { Link,useLocation } from 'react-router-dom'
function Cards({title,category}) {

    const cardsRef = useRef()
    const [data,setData] = useState([])
    const location = useLocation();
    const savedScrollPosition = useRef(0);
    const handleWheel=(event)=>{
        event.preventDefault()
        cardsRef.current.scrollLeft+=event.deltaY
    }
    const saveScrollPosition = () => {
      if (cardsRef.current) {
          savedScrollPosition.current = cardsRef.current.scrollLeft;
      }
  };
    

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response =>{
        console.log(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`)
        setData(response.results)})
      .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

    useEffect(() => {
      if (cardsRef.current) {
          cardsRef.current.scrollLeft = savedScrollPosition.current;
      }

      return () => {
          saveScrollPosition();
      };
  }, [location]);
   
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODEyODVjZjIzZmU4OGJjOWQ4NTU0NDk0NzFjM2VhYyIsIm5iZiI6MTcyMDI3NjA2NS44ODUzMzUsInN1YiI6IjY2MjE0ZTRmODdhZTdiMDE0Y2Q3YzkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KapnJglPDgXm42Z40-DGLQf4gtY86pnj5CJW-zSp-tc'
      }
    };
    
    
   

  return (
    <div className='cards'>
        <h2>{title ? title :'Poular on Netflix'}</h2>
        <div className='cards-list' ref={cardsRef}>
        {
          // (() => {
          //   const cards = [];
          //   for (let i = 0; i < 20; i++) {
          //     cards.push(
          //       <div className='card' key={i}>
          //         <img src={card} alt='card' className='card-img' />
          //         <p className='card-title'>WEDNESDAY</p>
          //       </div>
          //     );
          //   }
          //   return cards;
          // })()
          data.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500/`+card.backdrop_path : card1 } alt = 'card' className='card-img'/>
              <p className='card-title'>{card.title}</p>
            </Link>
          }) 
        }
        </div>
      
    </div>
  )
}

export default Cards
