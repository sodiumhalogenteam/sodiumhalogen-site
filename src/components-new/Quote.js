import React from 'react'

const Quote = ({ children, author, position, company }) => (

  <blockquote className="w600">
    {children}
     <p>
      <em>
        {author}<br/>
        {position}<br/>
        {company}
      </em>
    </p>
  </blockquote>
)

  export default Quote
