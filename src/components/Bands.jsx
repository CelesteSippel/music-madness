import React from 'react'
// 1. import the json data
import data from './data/bands.json'

const RockBands = props => {
  //
  const food = data.bands.filter(item => {
    return item.bands === props.match.params.bands
  })[0]
  console.log(food)
  return (
    <div className={props.match.params.bands}>
      <h1>{props.match.params.bands}</h1>
      <ul>
        {food.treats.map(treat => {
          return (
            <li>
              <header>{treat.title}</header>
              <img src={treat.image1} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RockBands
