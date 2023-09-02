import React from 'react'
import "./style.scss"

interface Iimgdata {
    imgSrc: string,
    desc: string
}

const ImageAdvertisement = () => {

    const imgList: Array<Iimgdata> = [
        {
            imgSrc: "image_1.png",
            desc: "Hitachi Digital Brand Ecosystem."
        },
        {
            imgSrc: "Image_2.png",
            desc: "Stråbe"
        },
        {
            imgSrc: "Image_3.png",
            desc: "Commons."
        },
        {
            imgSrc: "Image_4.png",
            desc: "Aeizei"
        },
        {
            imgSrc: "Image_5.png",
            desc: "Zvurçyk Fashion"
        },
        {
            imgSrc: "Image_6.png",
            desc: "Lancome"
        },
        {
            imgSrc: "image_1.png",
            desc: "Hitachi Digital Brand Ecosystem."
        },
        {
            imgSrc: "Image_2.png",
            desc: "Stråbe"
        },
    ]

    return (
        <section className='adv_container'>
            <div className='left_section'>
                <p className='left_section_title'>
                    Chat with unique characters
                </p>
                <p className='left_section_desc'>
                    You can chat many different characters for a few set <br /> of topics and interests.
                </p>
                <a className='left_section_btn' href='#chatarea'  >
                    Let’s start chat
                </a>
                <div className='left_section_box'>

                </div>
            </div>
            <div className='right_section'>
                {/* <div className='img_wrapper'>
                    <img src={"image_1.png"} className='img' alt="" />
                    <p>
                        Hitachi Digital Brand Ecosystem.
                    </p>
                </div>
                <div className='img_wrapper'>
                    <img src={"Image_2.png"} className='img' alt="" />
                    <p>
                        Stråbe
                    </p>
                </div> */}
              
                {
                    imgList.map((item,index) => {
                        return (
                            <div className='img_wrapper' key={index} >
                                <img src={item.imgSrc} className='img' alt="" />
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default ImageAdvertisement