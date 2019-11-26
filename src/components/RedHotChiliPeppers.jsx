import React from 'react'
import redhotlogo from '../images/redhotlogo.png'
import redhot from '../images/red-hot-chili-peppers-band-promo-2017.jpg'

const RedHotChiliPeppers = () => {
  return (
    <div>
      <header className="logo-name">
        <img src={redhotlogo} />

        <h1 className="name">Red Hot Chili Peppers</h1>
      </header>
      <main>
        <section className="center">
          <img src={redhot} className="box-shadow center" />
          <h2 className="j-c">
            Latest Albulm: <span>The Getaway (2016)</span>
          </h2>
        </section>
      </main>
    </div>
  )
}

export default RedHotChiliPeppers
