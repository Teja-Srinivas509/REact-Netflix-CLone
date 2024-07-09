import React from 'react'
import './Home.css'
import Bar from '../../Components/NavBar-Home/Bar'
import banner from'../../assets/onepiece.jpg'
import title from '../../assets/title.webp'
import play from '../../assets/play.png'
import moreInfo from '../../assets/moreInfo.png'
import Cards from '../../Components/Cards/Cards'
import Footer from'../../Components/Footer/Footer'
function Home() {
  return (
    <div className='home'>
        <Bar/>
        <div className='banner'>
            <img src={banner} alt='banner' className='banner-img' />
            <div className='banner-caption'>
                <img src={title} className='caption-img'/>
                <p>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 108 tankōbon volumes as of March 2024. </p>
                <div className='banner-btn'>
                    <button className='btn'><img src={play}/>Play</button>
                    <button className='btn' id='dark'><img src={moreInfo}/>More Info</button>
                </div>
                <Cards/>
            </div>
          
        </div>
        <div className='More'>
            <Cards title={"Now Playing"} category={"now_playing"}/>
            <Cards title={"Top Rated"} category={"popular"}/>
            <Cards title={"Popular"} category={"upcoming"}/>
            <Cards title={"Up Comming"} category={"top_rated"}/>     
            <Cards title={"Dramady"}/>
            <Cards title={"Anime"}/>
        </div>
        <Footer/>
       
    </div>
   
  )
}

export default Home
