import React from 'react'
// 1. import the json data
import data from './data/bands.json'

const Bands = props => {
  //
  const band = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  console.log(band)
  return (
    <div className={props.match.params.category}>
      <h1>{band.category}</h1>
      <ul>
        {band.names.map(name => {
          return (
            <li>
              <header>{name.title}</header>
              <img src={name.image1} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bands
