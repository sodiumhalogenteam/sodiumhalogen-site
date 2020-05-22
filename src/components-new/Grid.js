import React from 'react'

const Grid = ({ children, noGutter }) => {
  if (noGutter) {
    children.forEach((child) => {
      child.props.className = child.props.className + ' imgContainer'
    })
  }

  return <div className={noGutter ? null : 'grid'}>{children}</div>
}

export default Grid
