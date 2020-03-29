import React from 'react'

function Menu(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{ props.title }</span>
      </div>
    </nav>
  )
}

export default Menu
