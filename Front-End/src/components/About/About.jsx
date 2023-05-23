import React from 'react'
import './About.modules.css'
import miFoto from '../../assets/img/brian123.jpg'

export const About = () => {
  return (
    <div className='about'>
        <h1>Brian Gelvez</h1>
        <h2>full Stack Developer</h2>
        <h2>Estudiante Henry</h2>
        <img src={miFoto} alt="Loading..." />

    </div>
  )
}
