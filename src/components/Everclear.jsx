import React from 'react'
import everclearlogo from '../images/everclearlogo.jpg'
import everclear from '../images/everclear.jpg'

const Everclear = () => {
  return (
    <div className="e-center">
      <header>
        <img src={everclearlogo} />
      </header>
      <main>
        <img src={everclear} />
        <h2>
          Latest Albulm : <span> Black Is the New Black (2015) </span>
        </h2>
      </main>
    </div>
  )
}

export default Everclear
