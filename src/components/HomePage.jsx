import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
      <header>All Time Favorite Bands</header>
      <main>
        <section className="band">
          <Link to="/pearl-jam" className="home-link">
            Pearl Jam
          </Link>
          <p>
            Pearl Jam is an American rock band formed in 1990 in Seattle,
            Washington. The band's current lineup comprises founding members
            Eddie Vedder, Mike McCready, Stone Gossard and Jeff Ament and Matt
            Cameron. Keyboardist Boom Gaspar has also been a session/touring
            member with the band since 2002.
          </p>
        </section>
        <section className="band">
          <Link to="/everclear" className="home-link">
            Everclear
          </Link>
          <p>
            Everclear is an American rock band formed in Portland, Oregon, in
            1991. The band was formed by Art Alexakis, the band's lead
            songwriter, vocalist, and guitarist; and for most of the band's
            height of popularity, consisted of Craig Montoya on bass guitar and
            Greg Eklund on drums.
          </p>
        </section>
        <section className="band">
          <Link to="red-hot-chili-peppers" className="home-link">
            Red Hot Chili Peppers
          </Link>
          <p>
            Red Hot Chili Peppers are an American rock band formed in Los
            Angeles in 1983. The group's musical style primarily consists of
            alternative rock with an emphasis on funk, as well as elements from
            other genres such as punk rock and psychedelic rock.
          </p>
        </section>
      </main>
    </div>
  )
}

export default HomePage
