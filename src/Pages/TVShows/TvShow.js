import React from 'react'
import '../TVShows/TvShow.css'
import Bar from '../../Components/NavBar-Home/Bar'
import banner from '../../assets/friend.jpg'
import title from '../../assets/friends_title.png'
import play from '../../assets/play.png'
import moreInfo from '../../assets/moreInfo.png'
import TVShowCard from '../../Components/Cards-TVShows/TVShowCard'
import Footer from'../../Components/Footer/Footer'

function TvShow() {
  return (
    <div  className='TvShow'>
      <Bar></Bar>
      <div className='banner'>
            <img src={banner} alt='banner' className='banner-img' />
            <div className='banner-caption'>
                <img src={title} className='caption-img'/>
                <p>This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan</p>
                <div className='banner-btn'>
                    <button className='btn'><img src={play}/>Play</button>
                    <button className='btn' id='dark'><img src={moreInfo}/>More Info</button>
                </div>
                <TVShowCard/>
            </div>
        </div>
        <div className='More'>
          <TVShowCard title={'Airing Today'} category={'airing_today'} />
          <TVShowCard title={'On The Air'} category={'on_the_air'} />
          <TVShowCard title={'Popular'} category={'popular'} />
          <TVShowCard title={'Top Rated'} category={'top_rated'} />
          <TVShowCard title={'Breathe Taking'}/>
          <TVShowCard title={'Dramady'}/>
        </div>
        <Footer/>
    </div>
  )
}

export default TvShow
