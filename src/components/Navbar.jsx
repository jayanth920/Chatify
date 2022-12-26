import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">CHATIFY</span>
        <div className="user">
        <img src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" alt="" />
            <span>JAY</span>
        </div>
        <button>logout</button>
    </div>
  )
}

export default Navbar