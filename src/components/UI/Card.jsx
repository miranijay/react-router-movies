import React from 'react'
import { NavLink } from 'react-router';
import './Card.css';

const Card = ({ currMovie }) => {
    const { Poster, imdbID } = currMovie;
    return (
        <li className='hero-container'>
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} alt={imdbID} className='poster' />
                </div>
                <div className="ticket-container">
                    <div className="ticket_content">
                        <NavLink to={`/movie/${imdbID}`}>
                            <button className='ticket_buy-btn'>
                                Watch Now
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card;