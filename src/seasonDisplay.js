import React from 'react';

import './seasonDisplay.css';


const seasonConfig = {
    Summer: {
        text: 'Hot',
        iconName: 'sun'
    },
    Winter: {
        text: 'Chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

const SeasonDisplay = (props) => {
    const { latitude } = props
    const season = getSeason(latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>  {text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}


export default SeasonDisplay