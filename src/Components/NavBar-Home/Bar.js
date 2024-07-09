import React, { useEffect, useRef,useState } from 'react'
import logo from '../../assets/logo - Copy.png'
import search from '../../assets/search.svg'
import bell from '../../assets/bell.svg'
import profile from '../../assets/profile.png'
import dropdown from '../../assets/dropdown.svg'
import '../NavBar-Home/Bar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { logout } from '../../Firebase'

function Bar() {
    const navRef = useRef();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY >= 80) {
                    navRef.current.classList.add('nav-dark');
                } else {
                    navRef.current.classList.remove('nav-dark');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

  return (
    
      <div className='navbar'  ref={navRef}>
        <div className='navbar-left'>
            <img src={logo} className='logo'/>
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tv-shows">TV Shows</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/new-popular">New & Popular</Link></li>
                    <li><Link to="/my-list">My List</Link></li>
                    <li><Link to="/browse-languages">Browse by Languages</Link></li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={search} className='icons'/>
            <p>Children</p>
            <img src={bell} className='icons'/>
            <div className='navbar-profile'  ref={dropdownRef}>
            <img src={profile} className='profile' alt="profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
            <img src={dropdown} alt="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
               {isDropdownOpen &&(
                     <div className='dropdown-menu'>
                     <p onClick={logout} className='dropDown'>Sign Out of Netflix</p>
                 </div>
               )}
            </div>
        </div>
      </div>

  )
}

export default Bar
