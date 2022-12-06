import React from 'react'
import SectionHeading from './SectionHeading'

const Section = ({name, heading, children}) => {
  return (
    <section id={name}>
        <SectionHeading text={heading}  />
        <div>{children}</div>
    </section>
  )
}

export default Section