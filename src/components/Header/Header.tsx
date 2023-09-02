import React from 'react'
import "./Header.scss"
const Header = () => {
  return (
    <div className='header_container' >
      <h3 className='header_title' >
        <span  >
          reload
        </span>
        .case
      </h3>
      <div className='headerContent'>
        <h1 className='headerContent_caption'>
          <span>
            AI</span>  Chatbot
        </h1>
        <p className='headerContent_desc' >
          We’ve trained a model called ChatGPT which interacts <br /> in a  conversational way.
        </p>

        <a className='headerContent_btn' href='#chatarea' >
          Continue
        </a>

      </div>
      <div className='headerShapes' >
        <div className="curved-line"></div>
        <div className="curved2">

        </div>
        <div className="curved3">

        </div>
        <div className='block'>
          
        </div>
    </div>
    </div>
  )
}

export default Header