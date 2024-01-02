import React from 'react'
import Slider from 'react-slick'
import Imgone1s from '../assets/Imges/png/imgone1s.webp'
import Imgone2s from '../assets/Imges/png/imgone2s.webp'
import Imgone3s from '../assets/Imges/png/imgone3s.webp'
import Imgone4s from '../assets/Imges/png/imgone4s.webp'
import Imgone5s from '../assets/Imges/png/imgone5s.webp'
import Imgtwo1s from '../assets/Imges/png/imgtwo1s.webp'
import Imgtwo2s from '../assets/Imges/png/imgtwo2s.webp'
import Imgtwo3s from '../assets/Imges/png/imgtwo3s.webp'
import Imgtwo4s from '../assets/Imges/png/imgtwo4s.webp'
import Imgtwo5s from '../assets/Imges/png/imgtwo5s.webp'


const Slids = () => {

    const settings = {
        // Add your Slick Slider settings here
        dots: false,
        infinite: true,
        arrows: false, 
        speed: 4000,
        cssEase:'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,  // Add autoplay option
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    autoplay: true, 

                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    autoplay: true, 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true, 
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    autoplay: true, 
                },
            },
        ],
    };
    const settingstwo = {
        // Add your Slick Slider settings here
        dots: false,
        infinite: true,
        arrows: false, 
        rtl: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,  // Add autoplay option
        speed: 4000,
        cssEase: 'linear',
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,  // Add autoplay option
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    autoplay: true, 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true, 
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    autoplay: true, 
                },
            },
        ],
    };

    return (
        <>
            <div className='bg_color_slids'>
                <div className='container pb-4 py-lg-5 '>
                    <p className='pt-5 mt-lg-4 text-center fs_xxsm fw-bold ff_primary text-uppercase opacity-50 pb-lg-2 line-hight-how later-sps-how txt_color'>BRANDS</p>
                    <p className=' secondary_color ff_primary text-center fw-medium lin_height fs_xl'>We work with thousands of the world’s <span className='d-lg-block'> leading brands</span></p>
                    <Slider {...settings}>
                        <div className='text-center'>
                            <img src={Imgone1s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone2s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone3s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone4s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone5s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone1s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone2s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone3s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone4s} alt="#" className='imgslider1s' />
                        </div>
                        <div>
                            <img src={Imgone5s} alt="#" className='imgslider1s' />
                        </div>
                    </Slider>
                    <Slider {...settingstwo}>

                        <div className='text-center'>
                            <img src={Imgtwo1s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo2s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo3s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo4s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo5s} alt="#" className='imgslider2s' />
                        </div>

                        <div className='text-center'>
                            <img src={Imgtwo1s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo2s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo3s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo4s} alt="#" className='imgslider2s' />
                        </div>
                        <div className='text-center'>
                            <img src={Imgtwo5s} alt="#" className='imgslider2s' />
                        </div>


                    </Slider>
                    <div className='pb-xl-5 pt-2 pt-lg-4'>
                        <p className=' fw-normal fs_sm text-center  ff_primary max_width_compny compny_textcolor mx-auto line_height_compny pb-lg-5'>You're going to be in good company. We work with world's leading brands.</p>
                  </div>

                </div>
            </div>
        </>
    )
}

export default Slids