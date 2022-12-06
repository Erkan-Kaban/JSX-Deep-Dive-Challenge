import React from 'react'
import LinkTo from './LinkTo'

const SectionHeading = ({text}) => {
  return (
    <div>
        <h2>{text}</h2>
        <LinkTo external />
    </div>
    
  )
}

export default SectionHeading