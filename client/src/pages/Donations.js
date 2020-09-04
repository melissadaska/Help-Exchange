import React from 'react';
import BalloonsImage from '../assets/Coming-Soon-Balloons-1.png';
import '../assets/donations.scss';

function Donations() {   
    return (
        <div className="container__card">
        <img className="donations__card__image" src={BalloonsImage} alt="" />
        </div>
    )
}


export default Donations;
