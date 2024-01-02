import React from 'react'
import Imgfaster from '../assets/Imges/png/img_fasters.webp'

const Faster = () => {
    return (
        <>
            <div className='bg_img_faster '>
                <div className='container py-5'>
                    <div className='row py-lg-5 align-items-center'>
                        <div className='col-12 col-lg-5 py-lg-5'>
                            <p className='pt-lg-5 mt-lg-4 fs_xxsm fw-bold ff_primary text-uppercase opacity-50 pb-lg-2 line-hight-how later-sps-how text-white'>start with us</p>
                            <p className='py-lg-2 text-white ff_primary fw-medium fs_xl line_height_start max_width_start'>Start working faster today</p>

                            <p className='text-white ff_primary fw-normal line_height_we fs_sm pb-3'>We know the best solution for all of your business ideas and we can help you solve <span className='d-lg-block'>all business problems</span></p>

                            <button className='primary_color ff_primary fw-bold text-uppercase fs_xsm btn_common'>Get started</button>
                        </div>
                        <div className='col-12 col-lg-7 py-lg-5 pt-2'>
                            <img src={Imgfaster} alt="#" className='img_faster' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faster