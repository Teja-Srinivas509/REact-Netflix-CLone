import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidebar'>
                
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tv-shows">TV Shows</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/new-popular">New & Popular</Link></li>
                    <li><Link to="/my-list">My List</Link></li>
                    <li><Link to="/browse-languages">Browse by Languages</Link></li>
            </ul>
    </div>
  )
}

export default Sidebar
