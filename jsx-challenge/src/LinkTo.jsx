import React from 'react'

const LinkTo = ({external, href="#top", text="Top"}) => {
    if (external) {
        return (
            <a href={href}>{text}</a>
          )
    } else {
        return (
        <li><a href={href}>{text}</a></li>
        )
    }
  
}

export default LinkTo