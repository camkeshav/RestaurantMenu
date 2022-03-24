import React from 'react'
import "./style.css"

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElem) => {
            return (
              <button href="" className="btn-brf" onClick={() => filterItems(currElem)}>{currElem}</button>
            )
          })
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar;