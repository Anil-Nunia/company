
import Imgdasboard from '../assets/Imges/png/imgdasboard.webp'
import Imgtotal from '../assets/Imges/png/imgtotal.webp'
import Imgsearch from '../assets/Imges/png/imgresearch.webp'
import Imgnotification from '../assets/Imges/png/imgmessages.webp'
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react'
import Logopage from '../assets/Imges/png/logopage.webp'
const Navs = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden')
    }
    return (
        <>
            <div className=' pb-lg-5 bg_white'>
                <div className=' bg-hero-imgs pb-bg'>
                    <div className='px-3 px-lg-5 mx-xl-2 Container fluid'>
                        <div className='p_navs py-3 py-md-4'>
                            <nav className='d-flex justify-content-between align-items-center '>
                                <div className='w-100 w_unset_navbar d-flex justify-content-between'>
                                    <img className='Logo_w_h c_pointer log_navs' src={Logopage} alt="Log" />
                                    <button className='primary_color ff_primary fw-bold text-uppercase fs_xsm btn_common d-none d-md-block button_navbar me-5'>Get started</button>
                                </div>
                                <ul className={`${showNavbar ? 'd-flex align-items-center mb-0 nav_sm p-0 gap_nav_content mb-o' : 'd-flex align-items-center mb-0 nav_sm nav_show p-0 gap_nav_content'} `}>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Home</a></li>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Your benefits</a></li>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Our process</a></li>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Our works</a></li>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Testimonials</a></li>
                                    <li className=''><a href="#" className='ff_primary fs_xs text-white fw-medium line_hight_nav'>Start a project</a></li>
                                    <li className='d-md-none'>
                                        <button className='primary_color ff_primary fw-bold text-uppercase fs_xsm btn_common'>Get started</button>
                                    </li>
                                    <span title="close" className="ms-4 close_nav text-white fw-bold d_none_cross" onClick={() => setShowNavbar(true)}><RxCross2 fontSize={35} /></span>
                                </ul>
                                <ul className='mb-0 d-none button_navbtn'>
                                    <li>
                                        <button className='primary_color ff_primary fw-bold text-uppercase fs_xsm btn_common'>Get started</button>
                                    </li>
                                </ul>
                                <span title="open"
                                    className="d-inline d_none_cross fw-bold text-white cross_icon"
                                    onClick={() => setShowNavbar(false)}>
                                    <RxHamburgerMenu fontSize={35} /></span>
                            </nav>
                        </div >
                    </div >

                    <div className='container'>
                        <div className=' mt-lg-5 pt-4'>
                            <p className=' text-white text-center ff_primary fw-medium  line_heights fs_2xl py-2 mb-0'>A Digital Product Design Agency</p>
                            <p className='mb-0 text-white ff_primary fw-normal opacity-75 line_height_we fs_sm text-center'>We are Creative and Professional Digital Agency</p>
                            <div className='d-flex justify-content-center pt-4 pb-lg-5 mb-5'>
                                <button className='primary_color ff_primary fw-bold text-uppercase fs_xsm btn_common mt-lg-3'>Get started</button>
                            </div>

                        </div>
                    </div>
                </div >
                <div className='container'>
                    <div className='position-relative '>
                        <div className='text-center imgdsb '>
                            <img src={Imgdasboard} alt="#" className='imgdasboard' />
                        </div>
                        <img src={Imgtotal} alt="#" className='Imgtotal position-absolute' />
                        <img src={Imgsearch} alt="#" className='Imgresearch position-absolute' />
                        <img src={Imgnotification} alt="#" className='Imgnotification position-absolute' />
                    </div>
                </div>
            </div >


        </>
    )
}

export default Navs
