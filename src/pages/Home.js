import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banner.jpeg'
import '../styles/home.css';

function Home() {
    return (
        <div className="home"  style={{ backgroundImage: `url(${BannerImage})` }}>
            <div>
            <div className='headerContainer' 
           >
                <h1>Sándor Apartman</h1>
                <p>Szállást keresel?!</p>
                <Link to="foglalas">
                <button>Foglalás</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Home
