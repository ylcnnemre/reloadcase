import React from 'react'
import "./style.scss"
const Footer = () => {
    return (
        <div className='footer_section'>
            <div className='footer_container'>

                <div className='left_side'>
                    <p className='desc'>
                        We would love to hear from you. Let’s work — together <br /> with Reload
                    </p>
                    <button className='btn'>
                        Contact us
                    </button>
                </div>
                <div className='right_side'>
                    <div className='contact_block'>
                        <p className='title' >
                            Business requires
                        </p>
                        <p className='mail'>
                            hello@colstic.com
                        </p>
                        <p className='phone'>
                            +27 123 456 789
                        </p>
                    </div>
                    <div className='contact_block'>
                        <p className='title' >
                            Open Positions
                        </p>
                        <p >
                            Junior Graphic Design
                        </p>
                        <p >
                            Videography
                        </p>
                        <p>
                            Photography
                        </p>
                    </div>
                    <div className='contact_block'>
                        <p className='title' >
                            Open Positions
                        </p>
                        <p >
                            Junior Graphic Design
                        </p>
                        <p >
                            Videography
                        </p>
                        <p>
                            Photography
                        </p>
                    </div>
                    <div className='contact_block'>
                        <p className='title' >
                            Cape Town
                        </p>
                        <p >
                            14 Upper pepper street CBD, 8001
                            Cape Town
                        </p>

                    </div>
                </div>
            </div>
            <div className='footer_social'>
                <h3 className='footer_social_title' >
                    <span  >
                        reload
                    </span>
                    .case
                </h3>
                <div className='footer_social_names'>
                    <p>
                        DRIBBLE
                    </p>
                    <p>
                        INSTAGRAM
                    </p>
                    <p>
                        LINKEDIN
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Footer