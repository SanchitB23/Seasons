import React from 'react'
import './Seasons.css';

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  else
    return lat > 0 ? 'winter' : 'summer';
}
const seasonConfig = {
  summer: {
    text: 'Summer',
    iconName: 'sun'
  },
  winter: {
    text: 'Winter',
    iconName: 'snowflake'
  }
}
export default (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-start massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-end massive ${iconName} icon`}></i>
    </div>
  )
}