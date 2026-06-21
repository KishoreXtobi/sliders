import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { shortList } from './data'

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const { image, name, title, quote } = shortList[index]

  const prevPerson = () => {
    setIndex((currentIndex) => {
      return currentIndex === 0 ? shortList.length - 1 : currentIndex - 1
    })
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      return currentIndex === shortList.length - 1 ? 0 : currentIndex + 1
    })
  }

  return (
    <section className="slider-container">
      <article className="slide">
        <img src={image} alt={name} className="person-img" />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </article>

      <button className="prev" onClick={prevPerson} aria-label="Previous person">
        &lt;
      </button>
      <button className="next" onClick={nextPerson} aria-label="Next person">
        &gt;
      </button>
    </section>
  )
}

export default Carousel