import React from 'react'
import pearljamlogo from '../images/pearljamlogo.jpg'
import pearljam from '../images/pearljamhugging.jpg'

const PearlJam = () => {
  return (
    <div className="band-page">
      <header>
        <img src={pearljamlogo} />
        <span>
          <h1>Pearl Jam</h1>
        </span>
      </header>
      <main className="main-band-page">
        <img src={pearljam} />
        <h2 className="latest-album">
          Latest Albulm: <span>Lightning Bolt (2013)</span>
        </h2>
      </main>
    </div>
  )
}

export default PearlJam
