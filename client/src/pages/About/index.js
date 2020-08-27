import React from 'react';

import VolunteerBanner from './volunteer-banner.jpg';
import './about.scss';

function About() {   
    return (
        <div className="container__card">
          <img className="about__card__image" src={VolunteerBanner} alt="" />
            <div className="about__card__content">
                <h1 className="about__card__head">Help Exchange</h1>
                <br />
                <div className="about__card__wrap">
                    <h2 className="about__card__title">Help Exchange is dedicated to connecting volunteers with the vulnerable people in the community who are not able to leave their homes for groceries, medicine, and other necessary supplies. 
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About;
