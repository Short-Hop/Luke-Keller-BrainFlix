import React from 'react';
import viewsIcon from '../assets/Icons/SVG/Icon-views.svg'
import likesIcon from '../assets/Icons/SVG/Icon-likes.svg'

function Info() {
    return (
        <div className="info">

            <h1 className="info__title">BMX Rampage: 2018 Highlights</h1>

            <div className="info__subtitle">
                <h3>By Red Cow</h3>
                <h5>12/18/2018</h5>
            </div>

            <div className="info__stats">
                <img src={viewsIcon} alt="Views"></img>
                <h4>1,001,023</h4>
                <img src={likesIcon} alt="Likes"></img>
                <h4>110,985</h4>

            </div>

            <div className="divider"></div>

            <h4 className="info__description">
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. While
                mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was
                all that was needed for event veteran Kyle Strait,
                who won the event for the second time -- eight years
                after his first Red Cow Rampage title
        </h4>
        </div>
    )
}

export default Info