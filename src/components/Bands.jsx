import React from 'react'
// 1. import the json data
import data from './data/bands.json'

const RockBands = props => {
  //
  const bands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]

  return (
    <div className={props.match.params.category}>
      {bands.albums.map(band => {
        return (
          <div>
            <header>{band.title}</header>
            <img src={band.image} alt="" />
            <p>{band.info}</p>
          </div>
        )
      })}
    </div>
  )
}

export default RockBands
